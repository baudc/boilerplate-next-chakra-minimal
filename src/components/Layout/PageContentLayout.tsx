import React from 'react';
import { Flex } from '@chakra-ui/react';

interface PageContentLayoutProps {
  children?: React.ReactNode;
  maxWidth?: string;
}

// Assumes array of two children are passed
const PageContentLayout: React.FC<PageContentLayoutProps> = ({
  children,
  maxWidth,
}) => {
  return (
    <Flex justify="center" p="16px 0px" border="1px solid red">
      <Flex
        width="95%"
        justify="center"
        maxWidth={maxWidth || '860px'}
        border="1px solid blue"
      >
        <Flex
          direction="column"
          width={{ base: '100%', md: '65%' }}
          border="1px solid yellow"
        >
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PageContentLayout;
