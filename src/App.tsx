// Libs
import { ThemeProvider } from "styled-components";

// Pages
// import { LoginPage } from "./pages/login";
import { HomePage } from "./pages/home";

// Themes
import { THEME } from "./shared/themes/theme";

function App() {
  return (
    <ThemeProvider theme={THEME}>
      {/* <LoginPage /> */}
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
