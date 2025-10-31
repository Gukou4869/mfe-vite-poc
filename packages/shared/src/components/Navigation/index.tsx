import React from 'react';
import { Flex, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

interface NavigationItem {
  label: string;
  path: string;
}

interface NavigationProps {
  items: NavigationItem[];
}

export const Navigation: React.FC<NavigationProps> = ({ items }) => {
  return (
    <Flex gap={2} wrap="wrap">
      {items.map((item) => (
        <Button
          key={item.path}
          as={RouterLink}
          to={item.path}
          variant="outline"
          colorScheme="brand"
          size="sm"
        >
          {item.label}
        </Button>
      ))}
    </Flex>
  );
};

