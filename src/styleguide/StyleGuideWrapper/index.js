import React, { useState } from "react";

import Flex from "../../components/Flex";

import ThemeProvider from "../../components/ThemeProvider";

import { lightTheme, seaTheme } from "../../themes";

const THEMES = [lightTheme, seaTheme];

function StyleGuideWrapper({ children }) {
  const [themeIndex, setTheme] = useState(0);
  return (
    <ThemeProvider theme={THEMES[themeIndex]}>
      <Flex column>
        <Flex>
          <label>Theme &nbsp;</label>
          <select onChange={e => setTheme(e.target.value)}>
            <option value="0">Light</option>
            <option value="1">Sea</option>
          </select>
        </Flex>
        <hr />
        {children}
      </Flex>
    </ThemeProvider>
  );
}

export default StyleGuideWrapper;
