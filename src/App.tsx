import {Router} from "@/router";
import {ThemeProvider} from "@emotion/react";
import {theme} from "@/shared/theme";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  )
}

export default App
