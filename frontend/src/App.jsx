// // src/App.jsx
// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Navbar from './pages/Navbar';
// import Home from './pages/Home';
// import AboutUs from './pages/About';
// import RiskCalculator from './pages/RiskCalculator';
// import ScriptsIntro from './components/ScriptsIntro';
// import SQLInjection from './components/SQLInjection';

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/calculator" element={<RiskCalculator />} />
//         <Route path="/scripts" element={<ScriptsIntro />} />
//         <Route path="/scripts/sql-injection" element={<SQLInjection />} />
//       </Routes>
//     </>
//   );
// };

// export default App;

// src/App.jsx
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/About';
import RiskCalculator from './pages/RiskCalculator';
import ScriptsIntro from './components/ScriptsIntro';
import SQLInjection from './components/SQLInjection';
import './App.css'; // We'll create this for the navbar styles


const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-brand">VulnScan</div>
      <div className="navbar-links">
        <button className="nav-link active" onClick={() => navigate('/')}>Home</button>
        <button className="nav-link" onClick={() => navigate('/about')}>About</button>
        <button className="nav-link" onClick={() => navigate('/calculator')}>Risk Calculator</button>
        <button className="nav-link" onClick={() => navigate('/scripts')}>Scripts</button>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/calculator" element={<RiskCalculator />} />
        <Route path="/scripts" element={<ScriptsIntro />} />
        <Route path="/scripts/sql-injection" element={<SQLInjection />} />
      </Routes>
    </div>
  );
};

export default App;