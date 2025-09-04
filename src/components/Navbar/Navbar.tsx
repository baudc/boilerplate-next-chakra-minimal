import { Flex } from '@chakra-ui/react';

import { ColorModeButton } from '@/chakra/color-mode';
import { Brand } from '@/components/Navbar/Brand';

import { Menu } from './Menu/Menu';

export const Navbar = () => {
  return (
    <Flex
      alignItems="center"
      backdropFilter="blur(12px)"
      bg="rgba(255, 255, 255, 0.15)"
      border="1px solid rgba(255, 255, 255, 0.3)"
      borderRadius="2xl"
      boxShadow="lg"
      height="60px"
      justifyContent={{ md: 'space-between' }}
      left="50%"
      padding="6px 20px"
      position="fixed"
      top="60px"
      transform="translateX(-50%)"
      width={{ base: '90%', md: '66%' }}
      zIndex="1000"
    >
      <Brand />
      <Menu />
      <ColorModeButton />
    </Flex>
  );
};
