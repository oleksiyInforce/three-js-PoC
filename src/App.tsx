import { ThemeProvider } from "styled-components";
import "styles/App.css";
import { GlobalStyle, theme } from "./constants/theme";
import RootRouter from "components/Router/AppRouter.tsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RootRouter />
    </ThemeProvider>
  );
}

export default App;
