import { Box, SimpleGrid, VStack } from '@chakra-ui/react';

import { Heading } from '../ui';

type VariantGridProps<T extends string> = {
  render: (variant: T) => React.ReactNode;
  title?: string;
  variants: T[];
};

export const VariantGrid = <T extends string>({
  title = 'placeholder',
  variants,
  render,
}: VariantGridProps<T>) => {
  return (
    <VStack width="100%">
      {title && (
        <Heading alignSelf={'flex-start'} mb={8} role={'subsection'}>
          {title.toLowerCase()}
        </Heading>
      )}
      <SimpleGrid
        columns={{
          base: Math.min(2, variants.length),
          md: Math.min(3, variants.length),
          lg: Math.min(4, variants.length),
          xl: Math.min(5, variants.length),
          '2xl': Math.min(6, variants.length),
        }}
        gap={{ base: 4, sm: 6, xl: 12 }}
        width="100%"
      >
        {variants.map((variant) => {
          return (
            <Box
              alignContent={'center'}
              bgColor={'bg.secondary'}
              borderWidth="1px"
              key={variant}
              overflow="hidden"
              px={{ base: 2 }}
              py={{ base: 4 }}
              rounded="lg"
              shadow="sm"
              textAlign="center"
            >
              {render(variant)}
            </Box>
          );
        })}
      </SimpleGrid>
    </VStack>
  );
};
