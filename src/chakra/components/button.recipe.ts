import { defineRecipe } from '@chakra-ui/react';

import { getRecipeVariantKeys } from '@/utils/getRecipeVariantKeys';

const glassShadow = `0 4px 30px rgba(0,0,0,0.15), 0 0 15px rgba(255,255,255,0.07), inset 0 0 6px rgba(255,255,255,0.1)`;

const ButtonRecipe = defineRecipe({
  base: {
    // Common styles
    fontWeight: '500',
    borderRadius: 'xl',
    transition: 'all 0.2s ease-in-out',
    // Responsive
    maxW: { base: '100%', sm: '200px', md: '300px' },
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    // Interaction states
    _disabled: {
      opacity: 0.6,
      cursor: 'not-allowed',
      _hover: { opacity: 0.6 },
    },
    '&:hover': { transform: 'translateY(-2px)' },
    '&:active': { transform: 'scale(0.97) translateY(0)', boxShadow: 'none' },
  },
  variants: {
    visual: {
      // SOLID
      primary: {
        bg: 'primary.500',
        color: 'white',
        _hover: {
          bg: 'primary.600',
          boxShadow: 'lg',
        },
        _active: {
          bg: 'primary.700',
        },
      },
      secondary: {
        bg: 'secondary.500',
        color: 'white',
        _hover: {
          bg: 'secondary.600',
          boxShadow: 'lg',
        },
        _active: {
          bg: 'secondary.700',
        },
      },
      danger: {
        bg: 'red.500',
        color: 'white',
        _hover: {
          bg: 'red.600',
          boxShadow: 'lg',
        },
        _active: {
          bg: 'red.700',
        },
      },
      // SUBTLE
      outline: {
        bg: 'transparent',
        border: '2px solid',
        borderColor: 'primary.500',
        color: 'primary.500',
        _hover: {
          bg: 'primary.50',
          borderColor: 'primary.600',
        },
        _active: {
          bg: 'primary.100',
        },
      },
      ghost: {
        bg: 'transparent',
        color: 'primary.500',
        _hover: {
          bg: 'primary.50',
        },
        _active: {
          bg: 'primary.100',
        },
      },
      // GLASS
      glass: {
        bg: 'rgba(255, 255, 255, 0.07)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        color: 'black',
        shadow: glassShadow,
        _hover: {
          bg: 'rgba(255, 255, 255, 0.2)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        },
      },
      'glass-dark': {
        bg: 'rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        color: 'white',
        shadow: glassShadow,
        _hover: {
          bg: 'rgba(0, 0, 0, 0.4)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        },
      },
      // GRADIENT
      'gradient-blue': {
        position: 'relative',
        color: 'white',
        background: 'linear-gradient(135deg, #38bdf8 0%, #9333ea 100%)',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
        '&:hover': {
          boxShadow: '0 12px 24px -10px rgba(0, 0, 0, 0.2)',
          background: 'linear-gradient(135deg, #0ea5e9 0%, #7e22ce 100%)',
        },
        '&:active': {
          transform: 'scale(0.95) translateY(0)',
          boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.2)',
          background: 'linear-gradient(135deg, #0284c7 0%, #6b21a8 100%)',
        },
      },
      // SPECIAL
      oauth: {
        bg: 'white',
        border: '1px solid',
        borderColor: 'gray.200',
        color: 'gray.700',
        fontWeight: '500',
        _hover: {
          bg: 'gray.50',
          boxShadow: 'sm',
        },
        _active: {
          bg: 'gray.100',
        },
      },
    },
    size: {
      xs: {
        h: { base: '8', sm: '9' },
        minW: { base: '8', sm: '9' },
        px: { base: '3', sm: '4' },
        fontSize: { base: 'xs', sm: 'sm' },
      },
      sm: {
        h: { base: '9', md: '10' },
        minW: { base: '9', md: '10' },
        px: { base: '4', md: '6' },
        fontSize: { base: 'sm', md: 'md' },
      },
      md: {
        h: { base: '10', lg: '12' },
        minW: { base: '10', lg: '12' },
        px: { base: '6', lg: '8' },
        fontSize: { base: 'md', lg: 'lg' },
      },
      lg: {
        h: { base: '12', xl: '14' },
        minW: { base: '12', xl: '14' },
        px: { base: '8', xl: '10' },
        fontSize: { base: 'lg', xl: 'xl' },
      },
      xl: {
        h: { base: '14', '2xl': '16' },
        minW: { base: '14', '2xl': '16' },
        px: { base: '10', '2xl': '12' },
        fontSize: { base: 'xl', '2xl': '2xl' },
      },
    },
    rounded: {
      true: {
        borderRadius: 'full',
      },
    },
    loading: {
      true: {
        position: 'relative',
        pointerEvents: 'none', // disables click interactions
        cursor: 'progress',
        opacity: 0.8,
        _hover: { opacity: 0.8 },
      },
    },
    iconSpacing: {
      left: {
        display: 'inline-flex',
        alignItems: 'center',
        '& > svg:first-of-type': {
          marginRight: '2',
        },
      },
      right: {
        display: 'inline-flex',
        alignItems: 'center',
        '& > svg:last-of-type': {
          marginLeft: '2',
        },
      },
      only: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: { base: '3', sm: '4' }, // responsive
        '& > svg': { margin: 0 },
      },
    },
  },
  defaultVariants: {
    visual: 'primary',
    size: 'md',
  },
});

export const buttonVisuals = getRecipeVariantKeys(ButtonRecipe, 'visual');
export const buttonSizes = getRecipeVariantKeys(ButtonRecipe, 'size');

export default ButtonRecipe;
