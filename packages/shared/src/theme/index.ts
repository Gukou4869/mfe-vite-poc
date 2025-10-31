import { extendTheme } from '@chakra-ui/react';
import { colors } from './colors';
import { fonts, fontSizes, space } from './foundations';
import { components } from './components';

export const theme = extendTheme({
  colors,
  fonts,
  fontSizes,
  space,
  components,
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

