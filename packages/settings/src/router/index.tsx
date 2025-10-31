import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SettingsLayout from '../components/SettingsLayout';
import SettingsHome from '../pages/SettingsHome';
import Profile from '../pages/Profile';
import Account from '../pages/Account';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SettingsLayout />}>
        <Route index element={<SettingsHome />} />
        <Route path="profile" element={<Profile />} />
        <Route path="account" element={<Account />} />
      </Route>
    </Routes>
  );
};

export default Router;

