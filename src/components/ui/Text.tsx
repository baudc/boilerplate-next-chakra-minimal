'use client';

import type { RecipeVariantProps } from '@chakra-ui/react';

import { chakra } from '@chakra-ui/react';

import TextRecipe from '@/chakra/components/text.recipe';

export const StyledText = chakra('p', TextRecipe);

type TextVariantProps = RecipeVariantProps<typeof TextRecipe>;

export type TextProps = React.PropsWithChildren<TextVariantProps>;

export type TextVisual = TextVariantProps['visual'];
