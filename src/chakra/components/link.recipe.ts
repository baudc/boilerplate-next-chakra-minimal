import { defineRecipe } from '@chakra-ui/react';

import { getRecipeVariantKeys } from '@/utils/getRecipeVariantKeys';

const LinkRecipe = defineRecipe({
  variants: {
    visual: {
      inline: {
        color: 'blue.400',
        textDecoration: 'underline',
      },
    },
  },
});

export const linkVisuals = getRecipeVariantKeys(LinkRecipe, 'visual');

export default LinkRecipe;
