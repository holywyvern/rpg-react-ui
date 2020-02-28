import { css } from "@emotion/core";

import Color from "color";
import { layoutStyles } from "../../utils/layoutProps";

function transparentize(color, ratio = 0.8) {
  return Color(color)
    .fade(ratio)
    .rgb()
    .string();
}

function baseStyle(theme, layout) {
  return `
    ${layoutStyles(theme, layout)}
    border: ${theme.borders.sm} solid;
    border-radius: ${theme.borderRadius.md};
    padding: ${theme.paddings.md};
    box-shadow: 0px 1px 0px 1px ${theme.colors.shadow};
    font-weight: bold;
    cursor: pointer;

    &:active, &:disabled {
      box-shadow: inset 0px 0px 0px 1px ${theme.colors.shadow};
    }

    &:focus {
      outline: 0;
    }

    &:disabled {
      cursor: not-allowed;
    }
  `;
}

export default {
  positive(theme, layout) {
    return css`
      ${baseStyle(theme, layout)}
      border-color: ${theme.colors.borders.positive[0]};
      background: ${theme.colors.backgrounds.positive};
      color: ${theme.colors.texts.positive};
      -webkit-text-stroke: 2px ${transparentize(
        theme.colors.borders.positive[0]
      )};

      &:active, &:disabled {
        background: ${theme.colors.borders.positive[0]};
      }
    `;
  },
  negative(theme, layout) {
    return css`
      ${baseStyle(theme, layout)}
      border-color: ${theme.colors.borders.negative[0]};
      background: ${theme.colors.backgrounds.negative};
      color: ${theme.colors.texts.negative};
      -webkit-text-stroke: 2px ${transparentize(
        theme.colors.borders.negative[0]
      )};

      &:active, &:disabled {
        background: ${theme.colors.borders.negative[0]};
      }      
    `;
  },
  important(theme, layout) {
    return css`
      ${baseStyle(theme, layout)}
      border-color: ${theme.colors.borders.important[0]};
      background: ${theme.colors.backgrounds.important};
      color: ${theme.colors.texts.important};
      -webkit-text-stroke: 2px ${transparentize(
        theme.colors.borders.important[0]
      )};

      &:active, &:disabled {
        background: ${theme.colors.borders.important[0]};
      }      
    `;
  }
};
