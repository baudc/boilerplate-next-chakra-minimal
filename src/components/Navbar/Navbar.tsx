import { Flex } from '@chakra-ui/react';

import { ColorModeButton } from '@/chakra/color-mode';
import { Brand } from '@/components/Navbar/Brand';

import { Menu } from './Menu/Menu';

export const Navbar = () => {
  return (
    <Flex
      alignItems="center"
      backdropFilter="blur(12px)"
      bg="rgba(255, 255, 255, 0.1)"
      border="1px solid rgba(255, 255, 255, 0.3)"
      borderRadius={{ base: 'xl', md: '2xl' }}
      boxShadow="lg"
      height={{ base: '50px', md: '60px' }}
      justifyContent={{ base: 'space-between', md: 'space-between' }}
      left="50%"
      padding={{ base: '0.75rem 1rem', md: '1rem 2rem' }}
      position="fixed"
      top={{ base: '20px', sm: '40px', md: '60px' }}
      transform="translateX(-50%)"
      width={{ base: '95%', sm: '90%', md: '75%', lg: '66%' }}
      zIndex="1000"
    >
      <Brand />
      <Menu />
      <ColorModeButton />
    </Flex>
  );
};
