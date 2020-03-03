import { css } from "@emotion/core";
import { layoutStyles } from "../../utils/layoutProps";

import baseStyle, { transparentize } from "../Button/styles";
import { baseInputStyles } from "../inputStyles";

export function wrapperStyles(theme, layout) {
  return css`
    ${layoutStyles(theme, layout)}
    display: flex;
  `;
}

export function inputStyles(theme) {
  return css`
    flex: 1;
    ${baseInputStyles(theme)}
    border-radius: ${theme.borderRadius.xxs} 0 0 ${theme.borderRadius.xxs};
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  `;
}

export function buttonWrapperStyles(theme) {
  return css`
    display: flex;
    flex-direction: column;
  `;
}

function baseButtonStyle(theme) {
  return baseStyle(theme, { size: "0" }, "secondary");
}

export function buttonUpStyle(theme) {
  return css`
    ${baseButtonStyle(theme)}
    border-radius: 0 ${theme.borderRadius.xxs} 0 0;
    font-size: 8px;
  `;
}

export function buttonDownStyle(theme) {
  return css`
    ${baseButtonStyle(theme)}
    border-radius: 0 0 ${theme.borderRadius.xxs} 0;
    font-size: 8px;
  `;
}

export function separatorStyle(theme) {
  return css`
    border-bottom: 1px solid ${theme.colors.borders.secondary[0]};
  `;
}
