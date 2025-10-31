import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { GlobalHeader } from "@mfe-poc/shared";

const MainLayout: React.FC = () => {
  return (
    <Box minH="100vh" bg="gray.50">
      <GlobalHeader />
      <Box as="main">
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
