import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './Pages/Index/Index.jsx'
import Signup from './Pages/Signup/Signup.jsx'
import Home from './Pages/Home/Home.jsx'
import Login from './Pages/Login/Login.jsx'
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword.jsx'
import Input from './Pages/Input/Input.jsx'
import Co2 from './Pages/Co2/Co2.jsx';
import Renewable from './Pages/Renewable/Renewable.jsx';
import EducationalResources from './Pages/Educational/EducationalResources.jsx';
import MaterialComparision from './Pages/comparision/MaterialComparision.jsx';
import EnergyUsage from './Pages/EnergyUsage/EnergyUsage.jsx';
import Reports from './Pages/Reports/Reports.jsx';
import PrivateRoute from './PrivateRoute';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Forgot" element={<ForgotPassword />} />
        <Route path="/Home" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
        <Route path="/Input" element={
          <PrivateRoute>
            <Input />
          </PrivateRoute>
        } />
        <Route path="/Carbon" element={
          <PrivateRoute>
            <Co2 />
          </PrivateRoute>
        } />
        <Route path="/Renewable" element={
          <PrivateRoute>
            <Renewable />
          </PrivateRoute>
        } />
        <Route path="/Educational" element={
          <PrivateRoute>
            <EducationalResources />
          </PrivateRoute>
        } />
        <Route path="/Comparision" element={
          <PrivateRoute>
            <MaterialComparision />
          </PrivateRoute>
        } />
        <Route path="/EnergyUsage" element={
          <PrivateRoute>
            <EnergyUsage />
          </PrivateRoute>
        } />
        <Route path="/Reports" element={
          <PrivateRoute>
            <Reports />
          </PrivateRoute>
        } />

      </Routes>
    </Router>
  )
}

export default App