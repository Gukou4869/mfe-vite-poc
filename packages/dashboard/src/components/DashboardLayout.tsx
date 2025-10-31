import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container, Heading } from '@chakra-ui/react';
import { Navigation } from '@mfe-poc/shared';

const DashboardLayout: React.FC = () => {
  const navItems = [
    { label: 'Dashboard Home', path: '/dashboard' },
    { label: 'Overview', path: '/dashboard/overview' },
    { label: 'Analytics', path: '/dashboard/analytics' },
  ];

  return (
    <Container maxW="container.xl" py={8}>
      <Box mb={6}>
        <Heading as="h2" size="xl" mb={4} color="blue.700">
          Dashboard Service
        </Heading>
        <Navigation items={navItems} />
      </Box>
      <Box bg="white" p={6} borderRadius="lg" shadow="sm">
        <Outlet />
      </Box>
    </Container>
  );
};

export default DashboardLayout;

