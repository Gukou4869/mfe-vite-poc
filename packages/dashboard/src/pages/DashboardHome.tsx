import React from 'react';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  VStack,
} from '@chakra-ui/react';

const DashboardHome: React.FC = () => {
  const stats = [
    {
      label: 'Total Users',
      value: '12,543',
      change: 12.5,
      changeType: 'increase' as const,
    },
    {
      label: 'Revenue',
      value: '$45,231',
      change: 8.2,
      changeType: 'increase' as const,
    },
    {
      label: 'Orders',
      value: '1,234',
      change: 3.1,
      changeType: 'decrease' as const,
    },
    {
      label: 'Conversion Rate',
      value: '3.24%',
      change: 5.4,
      changeType: 'increase' as const,
    },
  ];

  return (
    <VStack align="stretch" spacing={6}>
      <Box>
        <Heading as="h3" size="lg" mb={2}>
          Dashboard Home
        </Heading>
        <Text color="gray.600">
          Welcome to the Dashboard service. This is running as a remote module via Module Federation.
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
        {stats.map((stat) => (
          <Stat
            key={stat.label}
            p={4}
            bg="blue.50"
            borderRadius="md"
            border="1px"
            borderColor="blue.100"
          >
            <StatLabel color="gray.600">{stat.label}</StatLabel>
            <StatNumber fontSize="2xl" color="blue.700">
              {stat.value}
            </StatNumber>
            <StatHelpText>
              <StatArrow type={stat.changeType} />
              {stat.change}%
            </StatHelpText>
          </Stat>
        ))}
      </SimpleGrid>

      <Box p={4} bg="gray.50" borderRadius="md">
        <Heading size="sm" mb={2}>
          Module Federation Features
        </Heading>
        <Text fontSize="sm" color="gray.600">
          This page demonstrates:
        </Text>
        <VStack align="start" mt={2} spacing={1}>
          <Text fontSize="sm">✓ Remote module loading</Text>
          <Text fontSize="sm">✓ Shared Chakra UI theme</Text>
          <Text fontSize="sm">✓ Sub-routing within the Dashboard service</Text>
        </VStack>
      </Box>
    </VStack>
  );
};

export default DashboardHome;

