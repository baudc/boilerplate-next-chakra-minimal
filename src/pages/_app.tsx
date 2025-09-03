import { AppProps } from 'next/app';
import { Layout } from '@/components/Layout/Layout';
import { Provider } from '@/components/ui/provider';

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
