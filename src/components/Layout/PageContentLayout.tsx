import { Flex } from '@chakra-ui/react';

interface PageContentLayoutProps {
  children?: React.ReactNode;
  maxWidth?: string;
}

// Assumes array of two children are passed
export const PageContentLayout: React.FC<PageContentLayoutProps> = ({
  children = null,
  maxWidth = '860px',
}) => {
  return (
    <Flex
      border="1px solid red"
      justify="center"
      p={{ base: '8px 0px', md: '16px 0px', lg: '24px 0px' }}
    >
      <Flex
        border="1px solid blue"
        justify="center"
        maxWidth={maxWidth}
        px={{ base: '4', sm: '6', md: '8' }}
        width={{ base: '100%', sm: '95%' }}
      >
        <Flex
          border="1px solid yellow"
          direction="column"
          width={{ base: '100%', md: '75%', lg: '65%' }}
        >
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};
