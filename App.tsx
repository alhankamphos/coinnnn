import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Home from './pages/Home';
import Wallet from './pages/Wallet';
import TransactionFlow from './pages/TransactionFlow';
import Activity from './pages/Activity';
import Profile from './pages/Profile';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/transaction/:step" element={<TransactionFlow />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/profile" element={<Profile />} />
        {/* Default redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <BottomNav />
    </HashRouter>
  );
};

export default App;