import { css } from "@emotion/core";
import { layoutStyles } from "../../utils/layoutProps";
import { baseInputStyles } from "../inputStyles";

export default function inputStyles(theme, layout) {
  return css`
    ${layoutStyles(theme, layout)}
    ${baseInputStyles(theme)}
  `;
}
