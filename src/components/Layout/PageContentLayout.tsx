import { Flex } from '@chakra-ui/react';

interface PageContentLayoutProps {
  children?: React.ReactNode;
  maxWidth?: string;
}

// Assumes array of two children are passed
const PageContentLayout: React.FC<PageContentLayoutProps> = ({
  children = null,
  maxWidth = '860px',
}) => {
  return (
    <Flex border="1px solid red" justify="center" p="16px 0px">
      <Flex
        border="1px solid blue"
        justify="center"
        maxWidth={maxWidth}
        width="95%"
      >
        <Flex
          border="1px solid yellow"
          direction="column"
          width={{ base: '100%', md: '65%' }}
        >
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PageContentLayout;
