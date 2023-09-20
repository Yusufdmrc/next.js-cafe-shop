import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layout/layout";

import { Provider } from "react-redux";
import store from "@/redux/store";
import { SessionProvider } from "next-auth/react";

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />;
        </Layout>
      </Provider>
    </SessionProvider>
  );
}

export default App;
