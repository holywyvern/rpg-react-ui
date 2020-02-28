import { css } from "@emotion/core";
import { layoutStyles } from "../../utils/layoutProps";

export default function inputStyles(theme, layout) {
  return css`
    ${layoutStyles(theme, layout)}
    box-sizing: border-box;
    background: ${theme.colors.backgrounds.input};
    border: ${theme.borders.sm} solid ${theme.colors.borders.input};
    background: ${theme.colors.backgrounds.input};
    color: ${theme.colors.texts.input};
    padding: ${theme.paddings.sm} ${theme.paddings.xs};
    border-radius: ${theme.borderRadius.xxs};

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:focus {
      outline: 0;
      border-color: ${theme.colors.borders.accent[2]};
      background: ${theme.colors.backgrounds.primary};
    }

    &::placeholder {
      color: ${theme.colors.texts.input};
      opacity: 0.75;
    }
  `;
}
