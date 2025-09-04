import { Flex } from '@chakra-ui/react';
import { Brand } from '@/components/Navbar/Brand';
import { Menu } from './Menu/Menu';
import { ColorModeButton } from '@/chakra/color-mode';

export const Navbar = () => {
  return (
    <Flex
      position="fixed"
      bg="gray.900"
      border="1px solid grey"
      rounded={12}
      width="42%"
      zIndex={100}
      padding="6px 20px"
      height="60px"
      alignItems="center"
      justifyContent={{ md: 'space-between' }}
    >
      <Brand />
      <Menu />
      <ColorModeButton />
    </Flex>
  );
};
