import { ReactNode } from 'react';
import { GetServerSideProps } from 'next';
import { theme } from './theme';
import { ChakraProvider } from '@chakra-ui/react';
import { cookieStorageManagerSSR, localStorageManager } from '@chakra-ui/react';

type ChakraWrapperProps = {
  cookies?: string | string[] | undefined;
  children?: ReactNode;
};

export const Chakra = ({ cookies, children }: ChakraWrapperProps) => {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager;

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      // first time no cookies set and may return undefined
      cookies: req.headers.cookie ?? '',
    },
  };
};
