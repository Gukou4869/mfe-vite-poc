import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalHeader } from '@mfe-poc/shared';
import { Box } from '@chakra-ui/react';
import DashboardLayout from './components/DashboardLayout';
import DashboardHome from './pages/DashboardHome';
import Overview from './pages/Overview';
import Analytics from './pages/Analytics';

const App: React.FC = () => {
  return (
    <Box minH="100vh" bg="gray.50">
      <GlobalHeader />
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="overview" element={<Overview />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
      </Routes>
    </Box>
  );
};

export default App;

