import { css } from "@emotion/core";

function baseStyle(theme) {
  return `
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
  positive(theme) {
    return css`
      ${baseStyle(theme)}
      border-color: ${theme.colors.borders.positive[0]};
      background: ${theme.colors.backgrounds.positive};
      color: ${theme.colors.texts.positive};

      &:active, &:disabled {
        background: ${theme.colors.borders.positive[0]};
      }
    `;
  },
  negative(theme) {
    return css`
      ${baseStyle(theme)}
      border-color: ${theme.colors.borders.negative[0]};
      background: ${theme.colors.backgrounds.negative};
      color: ${theme.colors.texts.negative};

      &:active, &:disabled {
        background: ${theme.colors.borders.negative[0]};
      }      
    `;
  },
  important(theme) {
    return css`
      ${baseStyle(theme)}
      border-color: ${theme.colors.borders.important[0]};
      background: ${theme.colors.backgrounds.important};
      color: ${theme.colors.texts.important};

      &:active, &:disabled {
        background: ${theme.colors.borders.important[0]};
      }      
    `;
  }
};
