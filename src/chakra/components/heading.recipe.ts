import { defineRecipe } from '@chakra-ui/react';

import { getRecipeVariantKeys } from '@/utils/getRecipeVariantKeys';

const HeadingRecipe = defineRecipe({
  base: {
    lineHeight: 'short',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  variants: {
    weight: {
      thin: { fontWeight: 'thin' },
      normal: { fontWeight: 'normal' },
      bold: { fontWeight: 'bold' },
    },
    size: {
      h1: {
        fontSize: { base: '2xl', sm: '3xl', md: '4xl', lg: '5xl' },
        lineHeight: {
          base: 'short',
          sm: 'short',
          md: 'shorter',
          lg: 'shorter',
        },
      },
      h2: {
        fontSize: { base: 'xl', sm: '2xl', md: '3xl', lg: '4xl' },
        lineHeight: {
          base: 'short',
          sm: 'short',
          md: 'shorter',
          lg: 'shorter',
        },
      },
      h3: {
        fontSize: { base: 'lg', sm: 'xl', md: '2xl', lg: '3xl' },
        lineHeight: {
          base: 'short',
          sm: 'short',
          md: 'shorter',
          lg: 'shorter',
        },
      },
      h4: {
        fontSize: { base: 'md', sm: 'lg', md: 'xl', lg: '2xl' },
        lineHeight: { base: 'short', sm: 'short', md: 'short', lg: 'short' },
      },
      h5: {
        fontSize: { base: 'sm', sm: 'md', md: 'lg', lg: 'xl' },
        lineHeight: { base: 'short', sm: 'short', md: 'short', lg: 'short' },
      },
      h6: {
        fontSize: { base: 'xs', sm: 'sm', md: 'md', lg: 'lg' },
        lineHeight: { base: 'short', sm: 'short', md: 'short', lg: 'short' },
      },
    },
    spacing: {
      normal: { letterSpacing: 'normal' },
      wide: { letterSpacing: 'wide' },
      wider: { letterSpacing: 'wider' },
      widest: { letterSpacing: 'widest' },
    },
    transform: {
      none: { textTransform: 'none' },
      uppercase: { textTransform: 'uppercase' },
      lowercase: { textTransform: 'lowercase' },
      capitalize: { textTransform: 'capitalize' },
      smallCaps: { textTransform: 'capitalize', fontVariantCaps: 'small-caps' },
    },
    role: {
      sectionTitle: {
        fontSize: { base: '2xl', sm: '3xl', md: '4xl', lg: '5xl' },
        lineHeight: {
          base: 'short',
          sm: 'short',
          md: 'shorter',
          lg: 'shorter',
        },
        fontWeight: 'bold',
        letterSpacing: 'widest',
        textTransform: 'uppercase',
      },
      subsection: {
        color: 'text.secondary',
        fontWeight: 'semibold',
        letterSpacing: 'widest',
        fontVariantCaps: 'small-caps',
        fontSize: { base: 'md', md: 'lg', lg: 'xl' },
      },
    },
  },
  defaultVariants: {
    weight: 'bold',
    size: 'h1',
    spacing: 'normal',
    transform: 'none',
  },
});

export const headingWeight = getRecipeVariantKeys(HeadingRecipe, 'weight');
export const headingSize = getRecipeVariantKeys(HeadingRecipe, 'size');
export const headingSpacing = getRecipeVariantKeys(HeadingRecipe, 'spacing');
export const headingTransform = getRecipeVariantKeys(
  HeadingRecipe,
  'transform',
);
export const headingRole = getRecipeVariantKeys(HeadingRecipe, 'role');

export default HeadingRecipe;
