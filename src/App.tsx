// Libs
import { ThemeProvider } from "styled-components";

// Components
import { Header } from "./components/header";

// Pages
// import { LoginPage } from "./pages/login";
import { HomePage } from "./pages/home";

// Themes
import { THEME } from "./shared/themes/theme";

function App() {
  return (
    <ThemeProvider theme={THEME}>
      {/* <LoginPage /> */}
      <Header />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
