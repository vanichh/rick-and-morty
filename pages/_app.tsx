import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Header } from 'components/header';
import { Footer } from 'components/footer/footer';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Provider } from 'react-redux';
import { initStore } from 'store/store';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

const store = initStore();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Header />
      <main>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </main>
      <Footer />
    </ApolloProvider>
  );
}

export default MyApp;
