import React from 'react';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardBody,
  Image,
  Stack,
  Button,
  VStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ProductsHome: React.FC = () => {
  const navigate = useNavigate();

  const featuredProducts = [
    {
      id: 1,
      name: 'Premium Widget',
      price: '$99.99',
      image: 'https://via.placeholder.com/300x200/4CAF50/FFFFFF?text=Premium+Widget',
    },
    {
      id: 2,
      name: 'Deluxe Gadget',
      price: '$149.99',
      image: 'https://via.placeholder.com/300x200/8BC34A/FFFFFF?text=Deluxe+Gadget',
    },
    {
      id: 3,
      name: 'Ultimate Tool',
      price: '$199.99',
      image: 'https://via.placeholder.com/300x200/CDDC39/333333?text=Ultimate+Tool',
    },
  ];

  return (
    <VStack align="stretch" spacing={6}>
      <Box>
        <Heading as="h3" size="lg" mb={2}>
          Products Home
        </Heading>
        <Text color="gray.600">
          Welcome to the Products service. This is another remote module loaded via Module Federation.
        </Text>
      </Box>

      <Box>
        <Heading size="md" mb={4}>
          Featured Products
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {featuredProducts.map((product) => (
            <Card key={product.id} variant="outline" overflow="hidden">
              <Image
                src={product.image}
                alt={product.name}
                objectFit="cover"
                height="200px"
              />
              <CardBody>
                <Stack spacing={3}>
                  <Heading size="sm" color="green.700">
                    {product.name}
                  </Heading>
                  <Text fontSize="xl" fontWeight="bold" color="green.600">
                    {product.price}
                  </Text>
                  <Button
                    colorScheme="green"
                    onClick={() => navigate(`/products/detail/${product.id}`)}
                  >
                    View Details
                  </Button>
                </Stack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Box>

      <Box p={4} bg="gray.50" borderRadius="md">
        <Heading size="sm" mb={2}>
          Products Service Features
        </Heading>
        <VStack align="start" mt={2} spacing={1}>
          <Text fontSize="sm">✓ Independent remote module</Text>
          <Text fontSize="sm">✓ Shared UI components and theme</Text>
          <Text fontSize="sm">✓ Dynamic routing with parameters (/detail/:id)</Text>
          <Text fontSize="sm">✓ Can run standalone or within Shell</Text>
        </VStack>
      </Box>
    </VStack>
  );
};

export default ProductsHome;

