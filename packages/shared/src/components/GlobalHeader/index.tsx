import React from "react";
import { Box, Flex, Button, Heading, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const GlobalHeader: React.FC = () => {
  return (
    <Box
      as="header"
      bg="brand.600"
      color="white"
      px={8}
      py={4}
      boxShadow="md"
      position="sticky"
      top={0}
      zIndex={1000}
    >
      <Flex align="center">
        <Heading as="h1" size="lg" fontWeight="bold">
          MFE POC
        </Heading>
        <Spacer />
        <Flex gap={4}>
          <Button
            as={RouterLink}
            to="/"
            variant="ghost"
            colorScheme="whiteAlpha"
            _hover={{ bg: "brand.700" }}
          >
            Home
          </Button>
          <Button
            as={RouterLink}
            to="/dashboard"
            variant="ghost"
            colorScheme="whiteAlpha"
            _hover={{ bg: "brand.700" }}
          >
            Dashboard
          </Button>
          <Button
            as={RouterLink}
            to="/products"
            variant="ghost"
            colorScheme="whiteAlpha"
            _hover={{ bg: "brand.700" }}
          >
            Products
          </Button>
          <Button
            as={RouterLink}
            to="/settings"
            variant="ghost"
            colorScheme="whiteAlpha"
            _hover={{ bg: "brand.700" }}
          >
            Settings
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
