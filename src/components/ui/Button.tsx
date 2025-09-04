'use client';

import type { RecipeVariantProps } from '@chakra-ui/react';

import { chakra } from '@chakra-ui/react';

import ButtonRecipe from '@/chakra/components/button.recipe';

export const Button = chakra('button', ButtonRecipe);

type ButtonVariantProps = RecipeVariantProps<typeof ButtonRecipe>;

export type ButtonProps = React.PropsWithChildren<ButtonVariantProps>;

export type ButtonVisual = ButtonVariantProps['visual'];
