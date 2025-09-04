// components/VariantGrid.tsx
import { Box, SimpleGrid, Text, VStack } from '@chakra-ui/react';

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
    <VStack align={'center'} width="100%">
      {title && (
        <Text
          fontSize="xs"
          fontWeight="bold"
          letterSpacing={'widest'}
          mb={8}
          textTransform={'uppercase'}
        >
          {title}
        </Text>
      )}
      <SimpleGrid columns={Math.min(4, variants.length)} gap={12}>
        {variants.map((variant) => (
          <Box
            borderWidth="1px"
            key={variant}
            p={4}
            rounded="lg"
            shadow="sm"
            textAlign="center"
          >
            <Text fontWeight="medium" mb={3}>
              {variant}
            </Text>
            {render(variant)}
          </Box>
        ))}
      </SimpleGrid>
    </VStack>
  );
};
