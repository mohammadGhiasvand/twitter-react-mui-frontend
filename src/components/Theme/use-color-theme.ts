/* eslint-disable @typescript-eslint/no-unused-vars */
import { PaletteMode, createTheme } from "@mui/material";
import { useMemo, useState } from "react";
import theme, { getDesignTokens } from "./theme";

export const useColorTheme = () => {
  const [mode, setMode] = useState<PaletteMode>("light");

  const toggleColorMode = () => {
    console.log(1);
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const modifiedTheme = useMemo(
    () =>
      createTheme({
        ...theme,
        direction: "rtl",
        palette: {
          mode,
        },
      }),
    [mode]
  );

  // const modifiedTheme = useMemo(
  //   () => createTheme(getDesignTokens(mode)),
  //   [mode]
  // );

  return {
    theme: modifiedTheme,
    mode: mode,
    toggleColorMode: toggleColorMode,
  };
};
