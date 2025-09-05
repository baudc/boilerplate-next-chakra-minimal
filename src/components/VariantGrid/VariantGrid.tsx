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
    <VStack width="100%">
      {title && (
        <Text
          alignSelf={'flex-start'}
          fontSize="xs"
          fontWeight="bold"
          letterSpacing={'widest'}
          mb={8}
          textTransform={'uppercase'}
        >
          {title}
        </Text>
      )}
      <SimpleGrid columns={Math.min(5, variants.length)} gap={12} width="100%">
        {variants.map((variant) => {
          const bgUrl = variant.includes('glass')
            ? "url('https://picsum.photos/400/300.webp')"
            : undefined;
          return (
            <Box
              bgColor={'bg.primary'}
              bgImage={bgUrl}
              borderWidth="1px"
              key={variant}
              p={8}
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
