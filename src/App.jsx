import 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import BrandDashboard from './pages/BrandDashboard';
import InfluencerDashboard from './pages/InfluencerDashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/brand/dashboard" element={<BrandDashboard />} />
          <Route path="/influencer/dashboard" element={<InfluencerDashboard />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
