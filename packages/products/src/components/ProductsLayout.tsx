import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container, Heading } from '@chakra-ui/react';
import { Navigation } from '@mfe-poc/shared';

const ProductsLayout: React.FC = () => {
  const navItems = [
    { label: 'Products Home', path: '/products' },
    { label: 'Product List', path: '/products/list' },
    { label: 'Sample Detail', path: '/products/detail/1' },
  ];

  return (
    <Container maxW="container.xl" py={8}>
      <Box mb={6}>
        <Heading as="h2" size="xl" mb={4} color="green.700">
          Products Service
        </Heading>
        <Navigation items={navItems} />
      </Box>
      <Box bg="white" p={6} borderRadius="lg" shadow="sm">
        <Outlet />
      </Box>
    </Container>
  );
};

export default ProductsLayout;

