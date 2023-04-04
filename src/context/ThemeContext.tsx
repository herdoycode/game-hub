import { useState, ReactNode, createContext } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

interface Props {
  children: ReactNode;
}

const ThemeContext = ({ children }: Props) => {
  const [mode, setMode] = useState<any>(
    localStorage.getItem("theme") || "light"
  );
  const colorMode = {
    toggleColorMode: () => {
      const newMode = mode === "light" ? "dark" : "light";
      setMode(newMode);
      localStorage.setItem("theme", newMode);
    },
  };

  const theme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ThemeContext;
