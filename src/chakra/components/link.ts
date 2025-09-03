import { defineRecipe } from '@chakra-ui/react';

export const Link = defineRecipe({
  variants: {
    visual: {
      inline: {
        color: 'blue.400',
        textDecoration: 'underline',
      },
    },
  },
});
