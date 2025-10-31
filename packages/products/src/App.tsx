import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalHeader } from '@mfe-poc/shared';
import { Box } from '@chakra-ui/react';
import ProductsLayout from './components/ProductsLayout';
import ProductsHome from './pages/ProductsHome';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';

const App: React.FC = () => {
  return (
    <Box minH="100vh" bg="gray.50">
      <GlobalHeader />
      <Routes>
        <Route path="/products" element={<ProductsLayout />}>
          <Route index element={<ProductsHome />} />
          <Route path="list" element={<ProductList />} />
          <Route path="detail/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </Box>
  );
};

export default App;

