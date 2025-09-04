import { defineRecipe } from '@chakra-ui/react';

import { getRecipeVariantKeys } from '@/utils/getRecipeVariantKeys';

const ButtonRecipe = defineRecipe({
  base: {
    fontWeight: '500',
    borderRadius: 'lg',
    transition: 'all 0.2s ease-in-out',
    _focus: {
      boxShadow: 'outline',
    },
    _disabled: {
      opacity: 0.6,
      cursor: 'not-allowed',
      _hover: { opacity: 0.6 },
    },
  },
  variants: {
    visual: {
      solid: {
        bg: 'primary.500',
        color: 'white',
        _hover: {
          bg: 'primary.600',
          transform: 'translateY(-1px)',
          boxShadow: 'lg',
        },
        _active: {
          bg: 'primary.700',
          transform: 'translateY(0)',
          boxShadow: 'none',
        },
      },
      glass: {
        bg: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        color: 'white',
        _hover: {
          bg: 'rgba(255, 255, 255, 0.2)',
          transform: 'translateY(-1px)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        },
      },
      'glass-dark': {
        bg: 'rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        color: 'white',
        _hover: {
          bg: 'rgba(0, 0, 0, 0.4)',
          transform: 'translateY(-1px)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        },
      },
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
          transform: 'translateY(-2px)',
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
          transform: 'translateY(-2px)',
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
      secondary: {
        bg: 'secondary.500',
        color: 'white',
        _hover: {
          bg: 'secondary.600',
          transform: 'translateY(-1px)',
          boxShadow: 'lg',
        },
        _active: {
          bg: 'secondary.700',
          transform: 'translateY(0)',
          boxShadow: 'none',
        },
      },
      outline: {
        bg: 'transparent',
        border: '2px solid',
        borderColor: 'primary.500',
        color: 'primary.500',
        _hover: {
          bg: 'primary.50',
          borderColor: 'primary.600',
          transform: 'translateY(-1px)',
        },
        _active: {
          bg: 'primary.100',
          transform: 'translateY(0)',
        },
      },
      ghost: {
        bg: 'transparent',
        color: 'primary.500',
        _hover: {
          bg: 'primary.50',
          transform: 'translateY(-1px)',
        },
        _active: {
          bg: 'primary.100',
          transform: 'translateY(0)',
        },
      },
      link: {
        bg: 'transparent',
        color: 'primary.500',
        padding: 0,
        height: 'auto',
        lineHeight: 'normal',
        verticalAlign: 'baseline',
        _hover: {
          textDecoration: 'underline',
          color: 'primary.600',
        },
        _active: {
          color: 'primary.700',
        },
      },
      danger: {
        bg: 'red.500',
        color: 'white',
        _hover: {
          bg: 'red.600',
          transform: 'translateY(-1px)',
          boxShadow: 'lg',
        },
        _active: {
          bg: 'red.700',
          transform: 'translateY(0)',
          boxShadow: 'none',
        },
      },
      oauth: {
        bg: 'white',
        border: '1px solid',
        borderColor: 'gray.200',
        color: 'gray.700',
        fontWeight: '500',
        _hover: {
          bg: 'gray.50',
          transform: 'translateY(-1px)',
          boxShadow: 'sm',
        },
        _active: {
          bg: 'gray.100',
          transform: 'translateY(0)',
          boxShadow: 'none',
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
    visual: 'solid',
    size: 'md',
  },
});

export const buttonVisuals = getRecipeVariantKeys(ButtonRecipe, 'visual');
export const buttonSizes = getRecipeVariantKeys(ButtonRecipe, 'size');

export default ButtonRecipe;
