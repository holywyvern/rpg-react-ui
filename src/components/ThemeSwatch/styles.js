import { css } from "@emotion/core";

export default function styles(theme, color) {
  return css`
    width: 24px;
    height: 24px;
    background: ${color};
  `;
}
