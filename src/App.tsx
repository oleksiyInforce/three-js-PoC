import { ThemeProvider } from "styled-components";
import "styles/App.css";
import { GlobalStyle, theme } from "./constants/theme";
import RootRouter from "components/Router/AppRouter.tsx";
import { AuthProvider } from "components/Auth/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RootRouter />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
