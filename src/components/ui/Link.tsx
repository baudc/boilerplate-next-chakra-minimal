'use client';

import type { RecipeVariantProps } from '@chakra-ui/react';

import { chakra } from '@chakra-ui/react';

import LinkRecipe from '@/chakra/components/link.recipe';

export const Link = chakra('a', LinkRecipe);

type LinkVariantProps = RecipeVariantProps<typeof LinkRecipe>;

export type LinkProps = React.PropsWithChildren<LinkVariantProps>;

export type LinkVisual = LinkVariantProps['visual'];
