import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Avatar,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Badge,
  Divider,
} from '@chakra-ui/react';

const Profile: React.FC = () => {
  return (
    <VStack align="stretch" spacing={6}>
      <Box>
        <Heading as="h3" size="lg" mb={2}>
          Profile Settings
          <Badge ml={3} colorScheme="purple">
            Settings Sub-route
          </Badge>
        </Heading>
        <Text color="gray.600">
          Manage your personal information and profile details.
        </Text>
      </Box>

      <HStack spacing={6} align="start">
        <VStack spacing={4}>
          <Avatar size="2xl" name="John Doe" src="https://bit.ly/broken-link" />
          <Button colorScheme="purple" size="sm">
            Change Avatar
          </Button>
        </VStack>

        <VStack flex={1} align="stretch" spacing={4}>
          <FormControl>
            <FormLabel>Full Name</FormLabel>
            <Input placeholder="John Doe" defaultValue="John Doe" />
          </FormControl>

          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="john.doe@example.com"
              defaultValue="john.doe@example.com"
            />
          </FormControl>

          <FormControl>
            <FormLabel>Job Title</FormLabel>
            <Input placeholder="Software Engineer" defaultValue="Software Engineer" />
          </FormControl>

          <FormControl>
            <FormLabel>Bio</FormLabel>
            <Textarea
              placeholder="Tell us about yourself..."
              rows={4}
              defaultValue="Passionate developer interested in micro-frontends and modern web technologies."
            />
          </FormControl>
        </VStack>
      </HStack>

      <Divider />

      <Box>
        <Heading size="sm" mb={4}>
          Contact Information
        </Heading>
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel>Phone Number</FormLabel>
            <Input type="tel" placeholder="+1 (555) 123-4567" />
          </FormControl>

          <FormControl>
            <FormLabel>Location</FormLabel>
            <Input placeholder="San Francisco, CA" />
          </FormControl>

          <FormControl>
            <FormLabel>Website</FormLabel>
            <Input
              type="url"
              placeholder="https://example.com"
              defaultValue="https://johndoe.dev"
            />
          </FormControl>
        </VStack>
      </Box>

      <HStack justify="flex-end" spacing={4}>
        <Button variant="outline">Cancel</Button>
        <Button colorScheme="purple">Save Changes</Button>
      </HStack>

      <Box p={4} borderLeft="4px" borderColor="purple.500" bg="gray.50">
        <Text fontSize="sm" fontWeight="bold" mb={2}>
          Routing Information
        </Text>
        <Text fontSize="sm" color="gray.600">
          Current route: <code>/settings/profile</code>
        </Text>
        <Text fontSize="sm" color="gray.600" mt={1}>
          This demonstrates a form-based sub-route within the Settings service.
        </Text>
      </Box>
    </VStack>
  );
};

export default Profile;

