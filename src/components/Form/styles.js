import { css } from "@emotion/core";
import { layoutStyles } from "../../utils/layoutProps";

export default function styles(theme, layout) {
  return css`
    ${layoutStyles(theme, layout)}
  `;
}
