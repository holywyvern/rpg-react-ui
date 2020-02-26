import React from "react";

import ThemeProvider from "../../components/ThemeProvider";

import { lightTheme } from "../../themes";

function StyleGuideWrapper({ children }) {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
}

export default StyleGuideWrapper;
