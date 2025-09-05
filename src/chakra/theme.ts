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
        // Transform your colors into token format
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
      // Fonts should be at the same level as colors, not nested inside
      fonts: {
        ...Object.fromEntries(
          Object.entries(fonts).map(([key, value]) => [key, { value }]),
        ),
      },
    },
    semanticTokens: {
      colors: {
        /* Background colors */
        'bg.primary': {
          value: {
            base: '{colors.background.100}', // Light background
            _dark: '{colors.background.900/33}', // Dark background
          },
        },
        'bg.secondary': {
          value: {
            base: '{colors.background.200}',
            _dark: '{colors.background.800/33}',
          },
        },
        /* Text colors */
        'text.primary': {
          value: {
            base: '{colors.black.900}', // Dark text for light mode
            _dark: '{colors.white.500}', // White text for dark mode
          },
        },
        'text.secondary': {
          value: {
            base: '{colors.black.700}',
            _dark: '{colors.background.700}',
          },
        },
        'text.subtle': {
          value: {
            base: '{colors.black.500}',
            _dark: '{colors.background.500}',
          },
        },
        /* Accent colors */
        'accent.primary': {
          value: {
            base: '{colors.primary.500}',
            _dark: '{colors.primary.300}',
          },
        },
        'accent.secondary': {
          value: {
            base: '{colors.secondary.500}',
            _dark: '{colors.secondary.300}',
          },
        },
        /* Border colors */
        'border.primary': {
          value: {
            base: '{colors.background.500}',
            _dark: '{colors.background.600}',
          },
        },
        'border.subtle': {
          value: {
            base: '{colors.background.300}',
            _dark: '{colors.background.700}',
          },
        },
      },
    },
  },
});
