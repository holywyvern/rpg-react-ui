import React from "react";
import PropTypes from "prop-types";

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

ThemeProvider.propTypes = {
  theme: PropTypes.any.isRequired
};

export default ThemeProvider;
