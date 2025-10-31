import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalHeader } from '@mfe-poc/shared';
import { Box } from '@chakra-ui/react';
import SettingsLayout from './components/SettingsLayout';
import SettingsHome from './pages/SettingsHome';
import Profile from './pages/Profile';
import Account from './pages/Account';

const App: React.FC = () => {
  return (
    <Box minH="100vh" bg="gray.50">
      <GlobalHeader />
      <Routes>
        <Route path="/settings" element={<SettingsLayout />}>
          <Route index element={<SettingsHome />} />
          <Route path="profile" element={<Profile />} />
          <Route path="account" element={<Account />} />
        </Route>
      </Routes>
    </Box>
  );
};

export default App;

