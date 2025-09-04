import { defineRecipe } from '@chakra-ui/react';

import { getRecipeVariantKeys } from '@/utils/getRecipeVariantKeys';

const TextRecipe = defineRecipe({
  variants: {
    visual: {
      link: {
        color: 'blue.400',
        textDecoration: 'underline',
        cursor: 'pointer',
      },
    },
  },
});

export const textVisuals = getRecipeVariantKeys(TextRecipe, 'visual');

export default TextRecipe;
