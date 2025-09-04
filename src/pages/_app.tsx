import type { AppProps } from 'next/app';

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
