import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from './Models/User.js';
import Appliance from './Models/Appliance.js';
import Power from './Models/Power.js';
import { startOfDay, endOfDay } from 'date-fns';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ message: 'Access denied' });

    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) return res.status(403).json({ message: 'Invalid token' });
      req.user = user;
      next();
    });
};

// Calculate power and cost for an appliance
const calculatePowerAndCost = async (appliance, location) => {
  const costs = {
    'Andhra Pradesh': 6,
    'Arunachal Pradesh': 5.5,
    'Assam': 5.75,
    'Bihar': 6.75,
    'Chhattisgarh': 5,
    'Goa': 3.75,
    'Gujarat': 5.25,
    'Haryana': 6.25,
    'Himachal Pradesh': 4.25,
    'Jharkhand': 6.25,
    'Karnataka': 5.5,
    'Kerala': 4.25,
    'Madhya Pradesh': 7,
    'Maharashtra': 6.5,
    'Manipur': 5.75,
    'Meghalaya': 4.75,
    'Mizoram': 5.5,
    'Nagaland': 5.5,
    'Odisha': 5.5,
    'Punjab': 5,
    'Rajasthan': 6,
    'Sikkim': 4.5,
    'Tamil Nadu': 5.25,
    'Telangana': 6.25,
    'Tripura': 5,
    'Uttar Pradesh': 6.5,
    'Uttarakhand': 4.75,
    'West Bengal': 6,
    'Andaman and Nicobar Islands': 7.5,
    'Chandigarh': 5,
    'Dadra and Nagar Haveli and Daman and Diu': 4.5,
    'Lakshadweep': 5,
    'Delhi': 4.5,
    'Puducherry': 4.5,
    'Ladakh': 6.25,
    'Jammu and Kashmir': 6.25
  };

  const power = appliance.rating * appliance.time;
  const cost = power * costs[location] / 1000;

  return { power, cost };
};

app.post('/signup', async (req, res) => {
  const { username, email, password, location } = req.body;

  try {
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ error: 'Username or email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
      
    const user = new User({
      username,
      email,
      password: hashedPassword,
      location
    });

    await user.save();

    const token = jwt.sign({ id: user._id }, JWT_SECRET);

    res.status(201).json({ message: 'User created successfully', token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET);

    res.status(200).json({ message: 'Login successful', token, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

app.post('/save-appliance', authenticateToken, async (req, res) => {
  const { appliance, company, time, frequency, rating, date } = req.body;

  try {
    const record = new Appliance({
      userId: req.user.id,
      appliance,
      company,
      time,
      frequency,
      rating,
      date
    });

    await record.save();
    res.status(201).json({ message: 'Record saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save record', details: error.message });
  }
});

app.get('/get-appliance', authenticateToken, async (req, res) => {
  try {
    const appliances = await Appliance.find({ userId: req.user.id });
    
    const formattedAppliances = appliances.map(appliance => ({
      _id: appliance._id,
      appliance: appliance.appliance,
      company: appliance.company,
      time: appliance.time,
      frequency: appliance.frequency,
      rating: appliance.rating,
      date: appliance.date
    }));

    res.status(200).json(formattedAppliances);
  } catch (error) {
    console.error("Error retrieving appliances:", error);
    res.status(500).json({ 
      error: 'Failed to retrieve appliances',
      details: error.message 
    });
  }
});

app.delete('/delete-appliance/:id', authenticateToken, async (req, res) => {
  try {
    const applianceId = req.params.id;
    
    if (!applianceId) {
      return res.status(400).json({ message: 'Appliance ID is required' });
    }

    const appliance = await Appliance.findOne({ 
      _id: applianceId,
      userId: req.user.id 
    });

    if (!appliance) {
      return res.status(404).json({ message: 'Appliance not found' });
    }

    // Get user's location for cost calculation
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Calculate power and cost to subtract
    const { power, cost } = await calculatePowerAndCost(appliance, user.location);

    // Find and update the power record for the appliance's date
    const powerRecord = await Power.findOne({
      userId: req.user.id,
      date: appliance.date
    });

    if (powerRecord) {
      powerRecord.power -= power;
      powerRecord.cost -= cost;

      // If power and cost become zero or negative, remove the record
      if (powerRecord.power <= 0 && powerRecord.cost <= 0) {
        await Power.findByIdAndDelete(powerRecord._id);
      } else {
        await powerRecord.save();
      }
    }

    // Delete the appliance
    await Appliance.findByIdAndDelete(applianceId);
    
    res.status(200).json({ 
      message: 'Appliance deleted successfully',
      updatedPower: powerRecord ? powerRecord.power : 0,
      updatedCost: powerRecord ? powerRecord.cost : 0
    });
  } catch (error) {
    console.error('Error deleting appliance:', error);
    res.status(500).json({ 
      error: 'Failed to delete appliance',
      details: error.message 
    });
  }
});

app.post('/save-power', authenticateToken, async (req, res) => {
  const { power, cost, date } = req.body;
  const currentDate = date;

  try {
    const existingRecord = await Power.findOne({
      userId: req.user.id,
      date: currentDate,
    });

    if (existingRecord) {
      existingRecord.power += power;
      existingRecord.cost += cost;

      await existingRecord.save();
      res.status(200).json({ message: 'Power updated successfully' });
    } else {
      const newRecord = new Power({
        userId: req.user.id,
        power,
        cost,
        date,
      });
      await newRecord.save();
      res.status(201).json({ message: 'Power saved successfully' });
    }
  } catch (error) {
    console.error("Error saving power:", error);
    res.status(500).json({ error: 'Failed to save record', details: error.message });
  }
});

app.get('/get-power', authenticateToken, async (req, res) => {
  try {
    const powers = await Power.find({ userId: req.user.id });

    const groupedData = powers.reduce((acc, power) => {
      const date = power.createdAt.toISOString().split('T')[0]; 

      if (!acc[date]) {
        acc[date] = [];
      }
      
      acc[date].push({
        power: power.power,
        cost: power.cost,
        time: power.createdAt,
      });
      
      return acc;
    }, {});

    res.status(200).json(groupedData);
  } catch (error) {
    console.error("Error retrieving powers:", error);
    res.status(500).json({ 
      error: 'Failed to retrieve powers',
      details: error.message 
    });
  }
});

app.get('/get-average-power', authenticateToken, async (req, res) => {
  try {
    const allPowers = await Power.find({});
    
    const groupedByDate = allPowers.reduce((acc, record) => {
      const date = record.createdAt.toISOString().split('T')[0];
      
      if (!acc[date]) {
        acc[date] = {
          totalCost: 0,
          userCount: new Set(),
        };
      }
      
      acc[date].totalCost += record.cost;
      acc[date].userCount.add(record.userId.toString());
      
      return acc;
    }, {});

    const averages = Object.entries(groupedByDate).reduce((acc, [date, data]) => {
      acc[date] = data.totalCost / data.userCount.size;
      return acc;
    }, {});

    res.status(200).json(averages);
  } catch (error) {
    console.error("Error calculating average power:", error);
    res.status(500).json({ 
      error: 'Failed to calculate average power',
      details: error.message 
    });
  }
});

app.get('/get-location', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ location: user.location });
  } catch (error) {
    console.error("Error fetching user location:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});