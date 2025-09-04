import type { RecipeDefinition } from '@chakra-ui/react';

/**
 * Extracts the variant keys from a Chakra recipe.
 * @param recipe - The Chakra recipe object
 * @param variantKey - The variant group to extract (e.g., "visual", "size")
 * @returns An array of variant names
 * @example
 * const buttonRecipe = defineRecipe({
 *   variants: {
 *     visual: {
 *       solid: {},
 *       outline: {}
 *     }
 *   }
 * });
 *
 * const visualVariants = getRecipeVariantKeys(buttonRecipe, 'visual');
 * // returns: ['solid', 'outline']
 */
export function getRecipeVariantKeys<
  T extends RecipeDefinition,
  K extends keyof NonNullable<T['variants']>,
>(recipe: T, variantKey: K): Array<keyof NonNullable<T['variants']>[K]> {
  const variants = recipe.variants?.[variantKey];
  if (!variants) {
    return [];
  }
  return Object.keys(variants) as Array<keyof NonNullable<T['variants']>[K]>;
}

/**
 * Gets all variant groups from a Chakra recipe (e.g., "visual", "size")
 * @param recipe - The Chakra recipe object
 * @returns An array of variant group names
 * @example
 * const buttonRecipe = defineRecipe({
 *   variants: {
 *     visual: { solid: {}, outline: {} },
 *     size: { sm: {}, md: {}, lg: {} }
 *   }
 * });
 *
 * const variantGroups = getAllRecipeVariantGroups(buttonRecipe);
 * // returns: ['visual', 'size']
 */
export function getAllRecipeVariantGroups(
  recipe: RecipeDefinition,
): Array<keyof NonNullable<RecipeDefinition['variants']>> {
  return Object.keys(recipe.variants || {}) as Array<
    keyof NonNullable<RecipeDefinition['variants']>
  >;
}
