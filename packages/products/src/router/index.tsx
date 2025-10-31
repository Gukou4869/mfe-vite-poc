import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductsLayout from '../components/ProductsLayout';
import ProductsHome from '../pages/ProductsHome';
import ProductList from '../pages/ProductList';
import ProductDetail from '../pages/ProductDetail';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsLayout />}>
        <Route index element={<ProductsHome />} />
        <Route path="list" element={<ProductList />} />
        <Route path="detail/:id" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
};

export default Router;

