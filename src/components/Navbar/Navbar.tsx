import { Flex } from '@chakra-ui/react';

import { ColorModeButton } from '@/chakra/color-mode';
import { Brand } from '@/components/Navbar/Brand';

import { Menu } from './Menu/Menu';

export const Navbar = () => {
  return (
    <Flex
      alignItems="center"
      bg="gray.900"
      border="1px solid grey"
      height="60px"
      justifyContent={{ md: 'space-between' }}
      padding="6px 20px"
      position="fixed"
      rounded={12}
      width="42%"
      zIndex={100}
    >
      <Brand />
      <Menu />
      <ColorModeButton />
    </Flex>
  );
};
