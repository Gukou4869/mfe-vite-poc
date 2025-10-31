import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Box, Spinner, Flex } from "@chakra-ui/react";

// Lazy load remote modules
const DashboardRouter = lazy(() => import("dashboard/Router"));
const ProductsRouter = lazy(() => import("products/Router"));
const SettingsRouter = lazy(() => import("settings/Router"));

const LoadingFallback: React.FC = () => (
  <Flex justify="center" align="center" minH="400px">
    <Spinner size="xl" color="brand.500" thickness="4px" />
  </Flex>
);

const AppRouter: React.FC = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route
          path="/dashboard/*"
          element={
            <Box>
              <DashboardRouter />
            </Box>
          }
        />
        <Route
          path="/products/*"
          element={
            <Box>
              <ProductsRouter />
            </Box>
          }
        />
        <Route
          path="/settings/*"
          element={
            <Box>
              <SettingsRouter />
            </Box>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
