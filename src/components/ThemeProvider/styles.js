import { css } from "@emotion/core";

export default function globalStyles(theme) {
  return css`
    ${theme.imports.map(i => `@import url('${i}');`).join("\n")}
    * {
      font-family: ${theme.fontFamily};
    }
  `;
}
