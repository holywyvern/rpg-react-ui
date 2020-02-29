import { css } from "@emotion/core";

import Color from "color";
import { layoutStyles } from "../../utils/layoutProps";

function transparentize(color, ratio = 0.8) {
  return Color(color)
    .fade(ratio)
    .rgb()
    .string();
}

export default function baseStyle(theme, { size, ...layout }, type, squared) {
  return `
    ${layoutStyles(theme, layout)}
    border: ${theme.borders.sm} solid ${theme.colors.borders[type][0]};
    border-radius: ${squared ? "1px" : theme.borderRadius[size]};
    padding: ${theme.paddings[size]};
    box-shadow: 0px 1px 0px 1px ${theme.colors.shadow};
    background: ${theme.colors.backgrounds[type]};
    color: ${theme.colors.texts[type]};    
    font-weight: bold;
    cursor: pointer;
    -webkit-text-stroke: 2px ${transparentize(theme.colors.borders[type][0])};
    font-size: ${theme.font.sizes[size]};

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
