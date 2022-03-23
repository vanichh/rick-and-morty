import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Header } from 'components/header';
import { Footer } from 'components/footer/footer';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </ApolloProvider>
  );
}

export default MyApp;
