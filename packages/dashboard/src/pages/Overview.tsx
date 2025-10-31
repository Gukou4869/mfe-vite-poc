import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  List,
  ListItem,
  ListIcon,
  Badge,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

const Overview: React.FC = () => {
  const features = [
    'Real-time data synchronization',
    'Advanced analytics engine',
    'Customizable dashboards',
    'Multi-user collaboration',
    'Export to multiple formats',
    'API integration support',
  ];

  return (
    <VStack align="stretch" spacing={6}>
      <Box>
        <Heading as="h3" size="lg" mb={2}>
          Overview
          <Badge ml={3} colorScheme="blue">
            Dashboard Sub-route
          </Badge>
        </Heading>
        <Text color="gray.600">
          This is a sub-route within the Dashboard service demonstrating nested routing capabilities.
        </Text>
      </Box>

      <Box p={6} bg="blue.50" borderRadius="md">
        <Heading size="md" mb={4} color="blue.800">
          Key Features
        </Heading>
        <List spacing={3}>
          {features.map((feature, index) => (
            <ListItem key={index} display="flex" alignItems="center">
              <ListIcon as={CheckCircleIcon} color="blue.500" />
              <Text>{feature}</Text>
            </ListItem>
          ))}
        </List>
      </Box>

      <Box p={4} borderLeft="4px" borderColor="blue.500" bg="gray.50">
        <Text fontSize="sm" fontWeight="bold" mb={2}>
          Routing Information
        </Text>
        <Text fontSize="sm" color="gray.600">
          Current route: <code>/dashboard/overview</code>
        </Text>
        <Text fontSize="sm" color="gray.600" mt={1}>
          This demonstrates that the Dashboard remote can handle its own sub-routing independently.
        </Text>
      </Box>
    </VStack>
  );
};

export default Overview;

