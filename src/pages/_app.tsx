// pages/_app.js
import { AppProps } from "next/app";
import { Layout } from "@/components/Layout/Layout";
import { Chakra } from "@/chakra/chakra";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Chakra>
  );
}

export { getServerSideProps } from "@/chakra/chakra";
export default MyApp;
