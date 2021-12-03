/** @jsxRuntime classic **/
/** @jsx jsx */
import { Head, Html, Main, NextScript } from "next/document";
import { jsx } from "theme-ui";

const MyDocument = () => {
  return (
    <Html lang="sv">
      <Head />
      <body sx={{ overflowX: "hidden" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
