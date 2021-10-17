import React from "react";
import { Html, Head, Main, NextScript } from "next/document";
import { useRouter } from "next/dist/client/router";

const MyDocument = () => {
  return (
    <Html lang="sv">
      <Head>
        <meta name="title" content={process.env.SITE_NAME} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
