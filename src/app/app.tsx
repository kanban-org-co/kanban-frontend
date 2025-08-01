import { ThemeProvider, Global, css } from "@emotion/react";

import { theme } from "@/shared/theme";

import { Router } from "./router";

const styles = css`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;

      font-family: 'Inter', sans-serif;
    }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={styles} />
      <Router/>
    </ThemeProvider>
  );
}

export default App;
