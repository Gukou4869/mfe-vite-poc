import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Switch,
  Button,
  Badge,
  Divider,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

const Account: React.FC = () => {
  return (
    <VStack align="stretch" spacing={6}>
      <Box>
        <Heading as="h3" size="lg" mb={2}>
          Account Settings
          <Badge ml={3} colorScheme="purple">
            Settings Sub-route
          </Badge>
        </Heading>
        <Text color="gray.600">
          Manage your account security and preferences.
        </Text>
      </Box>

      <Box>
        <Heading size="sm" mb={4}>
          Security
        </Heading>
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel>Current Password</FormLabel>
            <Input type="password" placeholder="Enter current password" />
          </FormControl>

          <FormControl>
            <FormLabel>New Password</FormLabel>
            <Input type="password" placeholder="Enter new password" />
          </FormControl>

          <FormControl>
            <FormLabel>Confirm New Password</FormLabel>
            <Input type="password" placeholder="Confirm new password" />
          </FormControl>

          <Button colorScheme="purple" alignSelf="flex-start">
            Update Password
          </Button>
        </VStack>
      </Box>

      <Divider />

      <Box>
        <Heading size="sm" mb={4}>
          Preferences
        </Heading>
        <VStack spacing={4} align="stretch">
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="email-notifications" mb="0">
              Email Notifications
            </FormLabel>
            <Switch id="email-notifications" colorScheme="purple" defaultChecked />
          </FormControl>

          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="marketing-emails" mb="0">
              Marketing Emails
            </FormLabel>
            <Switch id="marketing-emails" colorScheme="purple" />
          </FormControl>

          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="two-factor" mb="0">
              Two-Factor Authentication
            </FormLabel>
            <Switch id="two-factor" colorScheme="purple" />
          </FormControl>

          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="session-timeout" mb="0">
              Auto-logout on Inactivity
            </FormLabel>
            <Switch id="session-timeout" colorScheme="purple" defaultChecked />
          </FormControl>
        </VStack>
      </Box>

      <Divider />

      <Box>
        <Heading size="sm" mb={4} color="red.600">
          Danger Zone
        </Heading>
        <Alert status="warning" borderRadius="md">
          <AlertIcon />
          <Box flex="1">
            <AlertTitle>Delete Account</AlertTitle>
            <AlertDescription display="block">
              Once you delete your account, there is no going back. Please be certain.
            </AlertDescription>
          </Box>
        </Alert>
        <Button colorScheme="red" variant="outline" mt={4}>
          Delete Account
        </Button>
      </Box>

      <Box p={4} borderLeft="4px" borderColor="purple.500" bg="gray.50">
        <Text fontSize="sm" fontWeight="bold" mb={2}>
          Routing Information
        </Text>
        <Text fontSize="sm" color="gray.600">
          Current route: <code>/settings/account</code>
        </Text>
        <Text fontSize="sm" color="gray.600" mt={1}>
          Another example of sub-routing within the Settings service with account management features.
        </Text>
      </Box>
    </VStack>
  );
};

export default Account;

