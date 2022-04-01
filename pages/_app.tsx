import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Header } from "components/header";
import { Provider } from "react-redux";
import { initStore } from "store/store";
import { FC } from "react";
import NextNProgress from "nextjs-progressbar";
import dynamic from "next/dynamic";
import { IFooterProps } from "components/footer/footer.props";
import { ApolloProvider } from "components/apollo-provider";

const store = initStore();
const Footer = dynamic<IFooterProps>(() => import("components/footer").then((mod) => mod.Footer));

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider>
      <NextNProgress
        color='#306189'
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        showOnShallow={true}
      />
      <Header />
      <main>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </main>
      <Footer />
    </ApolloProvider>
  );
};

export default MyApp;
