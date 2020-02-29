import { css } from "@emotion/core";

import Color from "color";
import { layoutStyles } from "../../utils/layoutProps";

function transparentize(color, ratio = 0.8) {
  return Color(color)
    .fade(ratio)
    .rgb()
    .string();
}

export default function baseStyle(theme, layout, type) {
  return `
    ${layoutStyles(theme, layout)}
    border: ${theme.borders.sm} solid ${theme.colors.borders[type][0]};
    border-radius: ${theme.borderRadius.md};
    padding: ${theme.paddings.md};
    box-shadow: 0px 1px 0px 1px ${theme.colors.shadow};
    background: ${theme.colors.backgrounds[type]};
    color: ${theme.colors.texts[type]};    
    font-weight: bold;
    cursor: pointer;
    -webkit-text-stroke: 2px ${transparentize(theme.colors.borders[type][0])};

    &:focus {
      outline: 0;
      box-shadow:
        0px 1px 0px 1px ${theme.colors.shadow},
        0px 0px 4px 2px ${theme.colors.borders.highlights},
        inset 0px 0px 2px 1px ${theme.colors.borders.highlights};
    }

    &:active {
      box-shadow: inset 0px 0px 0px 1px ${theme.colors.shadow};
      background: ${theme.colors.borders[type][0]};
    }

    &:hover {
      filter: brightness(110%);
    }
  
    &:disabled {
      cursor: not-allowed;
      opacity: 0.7;
      filter: brightness(50%);
    }
  `;
}
