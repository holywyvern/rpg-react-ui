import React from "react";

import { wrapperStyles, guideStyles, navStyles, contentStyles } from "./styles";

import ThemeProvider from "../../components/ThemeProvider";

import { lightTheme } from "../../themes";

function StyleGuideRender({ children, hasSidebar, toc }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <div css={wrapperStyles}>
        <nav></nav>
        <div css={guideStyles}>
          {hasSidebar && <nav css={navStyles}>{toc}</nav>}
          <main css={contentStyles}>{children}</main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default StyleGuideRender;
