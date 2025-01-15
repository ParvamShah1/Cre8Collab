import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import PricingPage from './pages/Pricing';
import BrandDashboard from './pages/BrandDashboard';
import InfluencerDashboard from './pages/InfluencerDashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/brand/dashboard" element={<BrandDashboard />} />
          <Route path="/influencer/dashboard" element={<InfluencerDashboard />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
