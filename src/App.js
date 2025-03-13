import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import StartPage from './pages/StartPage';
import SetupPage from './pages/SetupPage';
import GamePage from './pages/GamePage';

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

// Separate component to use the useNavigate hook
const AppContent = () => {
  const navigate = useNavigate();

  const handleStartGame = () => {
    // We'll navigate to the game setup page when it's created
    navigate('/setup');
  };

  return (
    <Routes>
      <Route 
        path="/" 
        element={<StartPage onStartGame={handleStartGame} />} 
      />
      <Route path="/setup" element={<SetupPage />} />
      <Route path="/game" element={<GamePage />} />
      {/* Additional routes will be added later */}
    </Routes>
  );
};

export default App; 