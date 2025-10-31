import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container maxW="container.md" py={20}>
      <VStack spacing={6} textAlign="center">
        <Heading as="h1" size="4xl" color="brand.500">
          404
        </Heading>
        <Heading as="h2" size="xl" color="gray.700">
          Page Not Found
        </Heading>
        <Text fontSize="lg" color="gray.600">
          The page you are looking for does not exist or has been moved.
        </Text>
        <Box pt={4}>
          <Button colorScheme="brand" size="lg" onClick={() => navigate('/')}>
            Go to Home
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default NotFound;

