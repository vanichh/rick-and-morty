import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang='ru'>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,300&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
export default Document;
