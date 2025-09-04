import type { AppProps } from 'next/app';

import '@fontsource/noto-sans/300.css';
import '@fontsource/noto-sans/400.css';
import '@fontsource/noto-sans/700.css';

import { Provider } from '@/chakra/provider';
import { Layout } from '@/components/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider defaultTheme="dark" enableSystem={false}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
export default MyApp;
