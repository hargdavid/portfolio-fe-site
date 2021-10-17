import React, { useEffect } from "react";
import { ThemeProvider } from "theme-ui";
import { theme } from "../theme";

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
