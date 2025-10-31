import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container, Heading } from '@chakra-ui/react';
import { Navigation } from '@mfe-poc/shared';

const SettingsLayout: React.FC = () => {
  const navItems = [
    { label: 'Settings Home', path: '/settings' },
    { label: 'Profile', path: '/settings/profile' },
    { label: 'Account', path: '/settings/account' },
  ];

  return (
    <Container maxW="container.xl" py={8}>
      <Box mb={6}>
        <Heading as="h2" size="xl" mb={4} color="purple.700">
          Settings Service
        </Heading>
        <Navigation items={navItems} />
      </Box>
      <Box bg="white" p={6} borderRadius="lg" shadow="sm">
        <Outlet />
      </Box>
    </Container>
  );
};

export default SettingsLayout;

