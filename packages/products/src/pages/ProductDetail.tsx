import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Badge,
  Button,
  SimpleGrid,
  Divider,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircleIcon, StarIcon } from '@chakra-ui/icons';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Mock product data based on ID
  const product = {
    id,
    name: `Product #${id}`,
    price: '$' + (Number(id) * 50 + 49.99).toFixed(2),
    image: `https://via.placeholder.com/600x400/4CAF50/FFFFFF?text=Product+${id}`,
    description:
      'This is a high-quality product with excellent features and reliability. Perfect for both personal and professional use.',
    rating: 4.5,
    reviews: 128,
    stock: 45,
    features: [
      'Premium quality materials',
      'Lifetime warranty included',
      'Fast shipping available',
      '30-day money-back guarantee',
      'Expert customer support',
    ],
  };

  return (
    <VStack align="stretch" spacing={6}>
      <Box>
        <HStack justify="space-between" mb={4}>
          <Heading as="h3" size="lg">
            Product Details
            <Badge ml={3} colorScheme="green">
              Products Sub-route
            </Badge>
          </Heading>
          <Button
            variant="outline"
            colorScheme="green"
            onClick={() => navigate('/products/list')}
          >
            Back to List
          </Button>
        </HStack>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <Box>
          <Image
            src={product.image}
            alt={product.name}
            borderRadius="lg"
            objectFit="cover"
            width="100%"
          />
        </Box>

        <VStack align="stretch" spacing={4}>
          <Box>
            <Heading as="h4" size="xl" mb={2}>
              {product.name}
            </Heading>
            <HStack spacing={2} mb={4}>
              <HStack spacing={1}>
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < Math.floor(product.rating) ? 'yellow.400' : 'gray.300'}
                  />
                ))}
              </HStack>
              <Text fontSize="sm" color="gray.600">
                ({product.reviews} reviews)
              </Text>
            </HStack>
          </Box>

          <Text fontSize="3xl" fontWeight="bold" color="green.600">
            {product.price}
          </Text>

          <Badge colorScheme="green" width="fit-content" p={2}>
            In Stock: {product.stock} units
          </Badge>

          <Divider />

          <Box>
            <Heading size="sm" mb={3}>
              Description
            </Heading>
            <Text color="gray.600">{product.description}</Text>
          </Box>

          <Box>
            <Heading size="sm" mb={3}>
              Features
            </Heading>
            <List spacing={2}>
              {product.features.map((feature, index) => (
                <ListItem key={index} display="flex" alignItems="center">
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  <Text>{feature}</Text>
                </ListItem>
              ))}
            </List>
          </Box>

          <HStack spacing={4} pt={4}>
            <Button colorScheme="green" size="lg" flex={1}>
              Add to Cart
            </Button>
            <Button variant="outline" colorScheme="green" size="lg">
              Wishlist
            </Button>
          </HStack>
        </VStack>
      </SimpleGrid>

      <Box p={4} borderLeft="4px" borderColor="green.500" bg="gray.50">
        <Text fontSize="sm" fontWeight="bold" mb={2}>
          Routing Information
        </Text>
        <Text fontSize="sm" color="gray.600">
          Current route: <code>/products/detail/{id}</code>
        </Text>
        <Text fontSize="sm" color="gray.600" mt={1}>
          This demonstrates dynamic routing with URL parameters in the Products service.
        </Text>
      </Box>
    </VStack>
  );
};

export default ProductDetail;

