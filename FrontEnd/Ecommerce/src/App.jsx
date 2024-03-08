import MiddleBar from "./components/header/MiddleBar";
import TopBar from "./components/header/TopBar";
import BottomBar from "./components/header/BottomBar";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./Theme";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scroll/ScrollToTop";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />

        <TopBar />
        <MiddleBar />
        <BottomBar />

        <Box
          bgcolor={
            // @ts-ignore
            theme.palette.bg.main
          }
        >
          <Hero />
          <Main />
        </Box>

        <Footer />

        <ScrollToTop />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
