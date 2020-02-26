import React from "react";
import { Global, css } from "@emotion/core";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";

function styles(theme) {
  return css`
    ${theme.imports.map(i => `@import url('${i}');`).join("\n")}
    * {
      font-family: ${theme.fontFamily};
    }
  `;
}

function ThemeProvider({ theme, children }) {
  return (
    <EmotionThemeProvider theme={theme}>
      <>
        <Global styles={styles(theme)} />
        {children}
      </>
    </EmotionThemeProvider>
  );
}

export default ThemeProvider;
