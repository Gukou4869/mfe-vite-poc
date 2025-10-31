import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Button,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const services = [
    {
      name: "Dashboard",
      description: "View analytics and overview of your data",
      path: "/dashboard",
      color: "blue",
    },
    {
      name: "Products",
      description: "Manage your product catalog and inventory",
      path: "/products",
      color: "green",
    },
    {
      name: "Settings",
      description: "Configure your profile and account settings",
      path: "/settings",
      color: "purple",
    },
  ];

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4} color="brand.700">
            Welcome to Module Federation POC
          </Heading>
          <Text fontSize="lg" color="gray.600">
            This is a proof of concept demonstrating Vite Module Federation with
            multiple micro-frontends
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {services.map((service) => (
            <Card
              key={service.path}
              variant="outline"
              _hover={{ shadow: "lg", transform: "translateY(-2px)" }}
              transition="all 0.2s"
            >
              <CardHeader>
                <Heading size="md" color={`${service.color}.600`}>
                  {service.name}
                </Heading>
              </CardHeader>
              <CardBody>
                <VStack align="stretch" spacing={4}>
                  <Text color="gray.600">{service.description}</Text>
                  <Button
                    colorScheme={service.color}
                    onClick={() => navigate(service.path)}
                  >
                    Open {service.name}
                  </Button>
                </VStack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>

        <Box bg="brand.50" p={6} borderRadius="md">
          <Heading size="md" mb={3} color="brand.700">
            Features Demonstrated
          </Heading>
          <VStack align="stretch" spacing={2}>
            <Text>✓ Module Federation with Vite</Text>
            <Text>✓ Shared dependencies across micro-frontends</Text>
            <Text>✓ Independent routing within each service</Text>
            <Text>✓ Common UI theme with Chakra UI</Text>
            <Text>✓ Global header navigation</Text>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Home;
