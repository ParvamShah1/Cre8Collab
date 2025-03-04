import 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Register from './pages/Register'
import BrandDashboard from './pages/BrandDashboard';
import InfluencerDashboard from './pages/InfluencerDashboard';
import BrandOnboarding from './pages/BrandOnboarding';
import InfluencerOnboarding from './pages/InfluencerOnboarding';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/brand/dashboard" element={<BrandDashboard />} />
          <Route path="/influencer/dashboard" element={<InfluencerDashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/brand-onboard" element={<BrandOnboarding />} />
          <Route path="/influencer-onboard" element={<InfluencerOnboarding />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
