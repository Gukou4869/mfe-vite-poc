import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  Button,
  HStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ProductList: React.FC = () => {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: 'Premium Widget', category: 'Widgets', stock: 45, status: 'In Stock' },
    { id: 2, name: 'Deluxe Gadget', category: 'Gadgets', stock: 23, status: 'In Stock' },
    { id: 3, name: 'Ultimate Tool', category: 'Tools', stock: 8, status: 'Low Stock' },
    { id: 4, name: 'Basic Component', category: 'Components', stock: 120, status: 'In Stock' },
    { id: 5, name: 'Advanced Device', category: 'Devices', stock: 0, status: 'Out of Stock' },
    { id: 6, name: 'Standard Equipment', category: 'Equipment', stock: 67, status: 'In Stock' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Stock':
        return 'green';
      case 'Low Stock':
        return 'yellow';
      case 'Out of Stock':
        return 'red';
      default:
        return 'gray';
    }
  };

  return (
    <VStack align="stretch" spacing={6}>
      <Box>
        <Heading as="h3" size="lg" mb={2}>
          Product List
          <Badge ml={3} colorScheme="green">
            Products Sub-route
          </Badge>
        </Heading>
        <Text color="gray.600">
          Browse the complete product catalog with inventory information.
        </Text>
      </Box>

      <Box overflowX="auto">
        <Table variant="simple">
          <Thead bg="green.50">
            <Tr>
              <Th>Product Name</Th>
              <Th>Category</Th>
              <Th isNumeric>Stock</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((product) => (
              <Tr key={product.id} _hover={{ bg: 'gray.50' }}>
                <Td fontWeight="medium">{product.name}</Td>
                <Td>{product.category}</Td>
                <Td isNumeric>{product.stock}</Td>
                <Td>
                  <Badge colorScheme={getStatusColor(product.status)}>
                    {product.status}
                  </Badge>
                </Td>
                <Td>
                  <HStack spacing={2}>
                    <Button
                      size="sm"
                      colorScheme="green"
                      variant="outline"
                      onClick={() => navigate(`/products/detail/${product.id}`)}
                    >
                      View
                    </Button>
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      <Box p={4} borderLeft="4px" borderColor="green.500" bg="gray.50">
        <Text fontSize="sm" fontWeight="bold" mb={2}>
          Routing Information
        </Text>
        <Text fontSize="sm" color="gray.600">
          Current route: <code>/products/list</code>
        </Text>
        <Text fontSize="sm" color="gray.600" mt={1}>
          This demonstrates table-based navigation with sub-routing in the Products service.
        </Text>
      </Box>
    </VStack>
  );
};

export default ProductList;

