import { defineRecipe } from '@chakra-ui/react';

export const Text = defineRecipe({
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
