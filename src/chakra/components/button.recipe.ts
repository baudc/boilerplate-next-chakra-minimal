import { defineRecipe } from '@chakra-ui/react';

import { getRecipeVariantKeys } from '@/utils/getRecipeVariantKeys';

const ButtonRecipe = defineRecipe({
  base: {
    fontWeight: '500',
    borderRadius: 'xl',
    transition: 'all 0.2s ease-in-out',
    _focus: {
      boxShadow: 'outline',
    },
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
        color: 'white',
        shadow: `
        0 4px 30px rgba(0, 0, 0, 0.15),   /* deep outer shadow */
        0 0 15px rgba(255, 255, 255, 0.15), /* glowing outer highlight */
        inset 0 0 6px rgba(255,255,255, 0.1) /* subtle inner depth */
      `,
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
        shadow: `
        0 4px 30px rgba(0, 0, 0, 0.15),   /* deep outer shadow */
        0 0 15px rgba(255, 255, 255, 0.1), /* glowing outer highlight */
        inset 0 0 6px rgba(255,255,255, 0.1) /* subtle inner depth */
      `,
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
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
        _before: {
          content: '""',
          position: 'absolute',
          inset: '-2px',
          padding: '2px',
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          opacity: 0,
          transition: 'opacity 0.2s ease',
        },
        '&:hover': {
          boxShadow: '0 12px 24px -10px rgba(0, 0, 0, 0.2)',
          background: 'linear-gradient(135deg, #0ea5e9 0%, #7e22ce 100%)',
          _before: {
            opacity: 0.5,
          },
        },
        '&:active': {
          transform: 'scale(0.95) translateY(0)',
          boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.2)',
          background: 'linear-gradient(135deg, #0284c7 0%, #6b21a8 100%)',
          _before: {
            opacity: 1,
          },
        },
      },
      'gradient-purple': {
        position: 'relative',
        color: 'white',
        background: 'linear-gradient(135deg, #c084fc 0%, #0284c7 100%)',
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
        _before: {
          content: '""',
          position: 'absolute',
          inset: '-2px',
          padding: '2px',
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          opacity: 0,
          transition: 'opacity 0.2s ease',
        },
        '&:hover': {
          boxShadow: '0 12px 24px -10px rgba(0, 0, 0, 0.2)',
          background: 'linear-gradient(135deg, #a855f7 0%, #0369a1 100%)',
          _before: {
            opacity: 0.5,
          },
        },
        '&:active': {
          transform: 'scale(0.95) translateY(0)',
          boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.2)',
          background: 'linear-gradient(135deg, #9333ea 0%, #075985 100%)',
          _before: {
            opacity: 1,
          },
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
        h: '8',
        minW: '8',
        fontSize: 'xs',
        px: '3',
      },
      sm: {
        h: '9',
        minW: '9',
        fontSize: 'sm',
        px: '4',
      },
      md: {
        h: '10',
        minW: '10',
        fontSize: 'md',
        px: '6',
      },
      lg: {
        h: '12',
        minW: '12',
        fontSize: 'lg',
        px: '8',
      },
      xl: {
        h: '14',
        minW: '14',
        fontSize: 'xl',
        px: '10',
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
        padding: '0',
        '& > svg': {
          margin: '0',
        },
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
