import "../src/style/index.css";

import { ApolloProvider } from "@apollo/client";
import { client } from "lib/apollo/apolloClient";
import type { CustomAppPage } from "next/app";
import Head from "next/head";
import { memo } from "react";

const App: CustomAppPage = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ApolloProvider client={client}>
      <Head>
        <title>apollo-next</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </ApolloProvider>
  );
};

export default memo(App);
