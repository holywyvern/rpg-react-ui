import { css } from "@emotion/core";
import { layoutStyles } from "../../utils/layoutProps";

export default function labelStyles(theme, layout) {
  return css`
    ${layoutStyles(theme, layout)}
    font-weight: bold;
  `;
}
