'use client';

import type { ColorModeProviderProps } from './color-mode';

import { ChakraProvider } from '@chakra-ui/react';

import { system } from '@/chakra/theme';

import { ColorModeProvider } from './color-mode';

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
