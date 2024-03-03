import TopBar from "./components/header/TopBar";
import MiddleBar from "./components/header/MiddleBar";
import BottomBar from "./components/header/BottomBar";
import Hero from "./components/hero/Hero";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./Theme";
function App() {
  const [theme, colorMode] = useMode();
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <TopBar />
          <MiddleBar />
          <BottomBar />
          <Hero />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
