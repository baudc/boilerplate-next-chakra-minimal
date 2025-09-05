import { Flex } from '@chakra-ui/react';

import { ColorModeButton } from '@/chakra/color-mode';
import { Brand } from '@/components/Navbar/Brand';

import { Menu } from './Menu/Menu';

export const Navbar = () => {
  // const breakpoint = useBreakpointValue(
  //   { base: 'base', sm: 'sm', md: 'md', lg: 'lg', xl: 'xl', '2xl': '2xl' },
  //   { ssr: true },
  // );

  return (
    <Flex
      alignItems="center"
      backdropFilter="blur(12px)"
      bg="rgba(255, 255, 255, 0.07)"
      border="1px solid rgba(255, 255, 255, 0.2)"
      borderRadius={{ base: 'xl', md: '2xl' }}
      height={{ base: '50px', md: '60px' }}
      justifyContent={{ base: 'space-between', md: 'space-between' }}
      left="50%"
      padding={{ base: '0.75rem 1rem', md: '1rem 2rem' }}
      position="fixed"
      shadow={`
        0 4px 30px rgba(0, 0, 0, 0.15),   /* deep outer shadow */
        0 0 15px rgba(255, 255, 255, 0.15), /* glowing outer highlight */
        inset 0 0 6px rgba(255,255,255, 0.1) /* subtle inner depth */
      `}
      top={{ base: '20px', sm: '40px', md: '60px' }}
      transform="translateX(-50%)"
      width={{ base: '95%', sm: '90%', md: '75%', lg: '66%' }}
      zIndex="1000"
    >
      <Brand />
      {/* <Text>bp: {breakpoint}</Text> */}
      <Menu />
      <ColorModeButton />
    </Flex>
  );
};
