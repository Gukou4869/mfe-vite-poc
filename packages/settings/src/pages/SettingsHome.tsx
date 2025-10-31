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
  Icon,
  HStack,
} from '@chakra-ui/react';
import { SettingsIcon, LockIcon, BellIcon, ViewIcon } from '@chakra-ui/icons';

const SettingsHome: React.FC = () => {
  const settingsCategories = [
    {
      icon: SettingsIcon,
      title: 'General Settings',
      description: 'Configure general application preferences',
      color: 'purple',
    },
    {
      icon: LockIcon,
      title: 'Security',
      description: 'Manage your security and privacy settings',
      color: 'red',
    },
    {
      icon: BellIcon,
      title: 'Notifications',
      description: 'Control how you receive notifications',
      color: 'blue',
    },
    {
      icon: ViewIcon,
      title: 'Appearance',
      description: 'Customize the look and feel',
      color: 'teal',
    },
  ];

  return (
    <VStack align="stretch" spacing={6}>
      <Box>
        <Heading as="h3" size="lg" mb={2}>
          Settings Home
        </Heading>
        <Text color="gray.600">
          Welcome to the Settings service. Configure your preferences and manage your account.
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {settingsCategories.map((category) => (
          <Card
            key={category.title}
            variant="outline"
            _hover={{ shadow: 'md', transform: 'translateY(-2px)' }}
            transition="all 0.2s"
            cursor="pointer"
          >
            <CardHeader>
              <HStack spacing={3}>
                <Icon
                  as={category.icon}
                  boxSize={6}
                  color={`${category.color}.500`}
                />
                <Heading size="md" color={`${category.color}.700`}>
                  {category.title}
                </Heading>
              </HStack>
            </CardHeader>
            <CardBody pt={0}>
              <Text color="gray.600">{category.description}</Text>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>

      <Box p={4} bg="gray.50" borderRadius="md">
        <Heading size="sm" mb={2}>
          Settings Service Features
        </Heading>
        <VStack align="start" mt={2} spacing={1}>
          <Text fontSize="sm">✓ Third remote module in the federation</Text>
          <Text fontSize="sm">✓ Consistent theme across all services</Text>
          <Text fontSize="sm">✓ Independent sub-routing capabilities</Text>
          <Text fontSize="sm">✓ Shared navigation and header components</Text>
        </VStack>
      </Box>
    </VStack>
  );
};

export default SettingsHome;

