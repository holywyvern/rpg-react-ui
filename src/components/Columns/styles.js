import { css } from "@emotion/core";
import { layoutStyles } from "../../utils/layoutProps";

export default function columnStyles(
  theme,
  { format, gap, alignItems, justifyContent, ...layout }
) {
  return css`
    ${layoutStyles(theme, layout)}
    display: grid;
    grid-template-columns: ${format.join(" ")};
    ${gap && `grid-gap: ${theme.gaps[gap]};`}
    ${alignItems && `align-items: ${alignItems};`}
    ${justifyContent && `justify-content: ${justifyContent};`}
  `;
}
