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


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Input" element={<Input />} />
        <Route path="/Carbon" element={<Co2 />} />
        <Route path="/Renewable" element={<Renewable />} />
        <Route path="/Educational" element={<EducationalResources />} />
        <Route path="/Comparision" element={<MaterialComparision />} />
        <Route path="/Forgot" element={<ForgotPassword />} />
        <Route path="/EnergyUsage" element={<EnergyUsage />} />
        <Route path="/Reports" element={<Reports />} />

      </Routes>
    </Router>
  )
}

export default App
