import { createSystem, defaultConfig } from '@chakra-ui/react';

import { colors } from './colors';
import { fonts } from './fonts';

export const system = createSystem(defaultConfig, {
  theme: {
    breakpoints: {
      base: '0em', // 0px
      sm: '30em', // ~480px
      md: '48em', // ~768px
      lg: '62em', // ~992px
      xl: '80em', // ~1280px
      '2xl': '96em', // ~1536px
    },
    tokens: {
      colors: {
        ...Object.fromEntries(
          Object.entries(colors).map(([key, value]) => [
            key,
            typeof value === 'object'
              ? Object.fromEntries(
                  Object.entries(value).map(([subKey, subValue]) => [
                    subKey,
                    { value: subValue },
                  ]),
                )
              : { value },
          ]),
        ),
      },
      fonts: {
        ...Object.fromEntries(
          Object.entries(fonts).map(([key, value]) => [key, { value }]),
        ),
      },
    },
    semanticTokens: {
      colors: {
        // Background colors
        'bg.primary': {
          _light: { value: 'white' },
          _dark: { value: 'black.500' },
        },
        'bg.secondary': {
          _light: { value: 'gray.50' },
          _dark: { value: 'black.400' },
        },
        'bg.subtle': {
          _light: { value: 'gray.100' },
          _dark: { value: 'black.300' },
        },
        // Text colors
        'text.primary': {
          _light: { value: 'black.900' },
          _dark: { value: 'white' },
        },
        'text.secondary': {
          _light: { value: 'black.700' },
          _dark: { value: 'whiteAlpha.800' },
        },
        'text.subtle': {
          _light: { value: 'black.500' },
          _dark: { value: 'whiteAlpha.600' },
        },
        // Accent colors
        'accent.primary': {
          _light: { value: 'blue.500' },
          _dark: { value: 'blue.300' },
        },
        'accent.secondary': {
          _light: { value: 'blue.600' },
          _dark: { value: 'blue.200' },
        },
        // Border colors
        'border.primary': {
          _light: { value: 'gray.200' },
          _dark: { value: 'whiteAlpha.300' },
        },
        'border.subtle': {
          _light: { value: 'gray.100' },
          _dark: { value: 'whiteAlpha.200' },
        },
      },
    },
  },
});
