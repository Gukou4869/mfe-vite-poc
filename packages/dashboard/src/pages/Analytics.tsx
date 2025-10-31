import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Badge,
  Progress,
} from '@chakra-ui/react';

const Analytics: React.FC = () => {
  const metrics = [
    { name: 'Page Views', value: '125,432', trend: 85, color: 'blue' },
    { name: 'Unique Visitors', value: '23,456', trend: 70, color: 'green' },
    { name: 'Bounce Rate', value: '42.3%', trend: 35, color: 'orange' },
    { name: 'Avg. Session Duration', value: '3m 45s', trend: 92, color: 'purple' },
  ];

  return (
    <VStack align="stretch" spacing={6}>
      <Box>
        <Heading as="h3" size="lg" mb={2}>
          Analytics
          <Badge ml={3} colorScheme="blue">
            Dashboard Sub-route
          </Badge>
        </Heading>
        <Text color="gray.600">
          Another sub-route demonstrating independent routing within the Dashboard remote module.
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        {metrics.map((metric) => (
          <Card key={metric.name} variant="outline">
            <CardHeader pb={2}>
              <Text fontSize="sm" color="gray.600" fontWeight="medium">
                {metric.name}
              </Text>
            </CardHeader>
            <CardBody pt={0}>
              <Text fontSize="2xl" fontWeight="bold" color={`${metric.color}.600`} mb={2}>
                {metric.value}
              </Text>
              <Progress
                value={metric.trend}
                size="sm"
                colorScheme={metric.color}
                borderRadius="full"
              />
              <Text fontSize="xs" color="gray.500" mt={1}>
                Performance: {metric.trend}%
              </Text>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>

      <Box p={6} bg="purple.50" borderRadius="md">
        <Heading size="sm" mb={3} color="purple.800">
          Analytics Insights
        </Heading>
        <VStack align="stretch" spacing={2}>
          <Text fontSize="sm">📈 Traffic has increased by 23% this month</Text>
          <Text fontSize="sm">👥 User engagement is at an all-time high</Text>
          <Text fontSize="sm">🎯 Conversion funnel optimization showing positive results</Text>
          <Text fontSize="sm">📊 Mobile traffic accounts for 65% of all visits</Text>
        </VStack>
      </Box>

      <Box p={4} borderLeft="4px" borderColor="blue.500" bg="gray.50">
        <Text fontSize="sm" fontWeight="bold" mb={2}>
          Routing Information
        </Text>
        <Text fontSize="sm" color="gray.600">
          Current route: <code>/dashboard/analytics</code>
        </Text>
        <Text fontSize="sm" color="gray.600" mt={1}>
          This is another example of sub-routing within the Dashboard service.
        </Text>
      </Box>
    </VStack>
  );
};

export default Analytics;

