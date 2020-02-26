import React from "react";
import { Global } from "@emotion/core";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";

import globalStyles from "./styles";

function ThemeProvider({ theme, children }) {
  return (
    <EmotionThemeProvider theme={theme}>
      <>
        <Global styles={globalStyles(theme)} />
        {children}
      </>
    </EmotionThemeProvider>
  );
}

export default ThemeProvider;
