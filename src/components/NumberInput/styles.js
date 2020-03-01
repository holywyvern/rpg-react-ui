import { css } from "@emotion/core";
import { layoutStyles } from "../../utils/layoutProps";

import { transparentize } from "../Button/styles";

export function wrapperStyles(theme, layout) {
  return css`
    ${layoutStyles(theme, layout)}
    display: flex;
  `;
}

export function inputStyles(theme) {
  return css`
    flex: 1;
    display: block;
    box-sizing: border-box;
    background: ${theme.colors.backgrounds.input};
    border: ${theme.borders.sm} solid ${theme.colors.borders.input};
    background: ${theme.colors.backgrounds.input};
    color: ${theme.colors.texts.input};
    padding: ${theme.paddings.sm} ${theme.paddings.xs};
    border-radius: ${theme.borderRadius.xxs} 0 0 ${theme.borderRadius.xxs};
    -moz-appearance: textfield;
    box-shadow: 0px 1px 0px 1px ${theme.colors.shadow};

    &:focus {
      outline: 0;
      box-shadow: 0px 1px 0px 1px ${theme.colors.shadow},
        0px 0px 4px 2px ${theme.colors.borders.highlights},
        inset 0px 0px 2px 1px ${theme.colors.borders.highlights};
      border-color: ${theme.colors.borders.accent[2]};
      background: ${theme.colors.backgrounds.input};
    }

    &:hover {
      filter: brightness(110%);
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.7;
      filter: brightness(50%);
    }

    &::placeholder {
      color: ${theme.colors.texts.input};
      opacity: 0.75;
    }

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
  return `
  font-size: 8px;
  border: ${theme.borders.sm} solid ${theme.colors.borders.secondary[0]};
  padding: 0;
  box-shadow: 0px 1px 0px 1px ${theme.colors.shadow};
  background: ${theme.colors.backgrounds.secondary};
  color: ${theme.colors.texts.secondary};    
  font-weight: bold;
  cursor: pointer;
  -webkit-text-stroke: 2px ${transparentize(theme.colors.borders.secondary[0])};

  &:focus {
    outline: 0;
    box-shadow:
      0px 1px 0px 1px ${theme.colors.shadow},
      0px 0px 4px 2px ${theme.colors.borders.highlights},
      inset 0px 0px 2px 1px ${theme.colors.borders.highlights};
  }

  &:active {
    box-shadow: inset 0px 0px 0px 1px ${theme.colors.shadow};
    background: ${theme.colors.borders.secondary[0]};
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

export function buttonUpStyle(theme) {
  return css`
    ${baseButtonStyle(theme)}
    border-radius: 0 ${theme.borderRadius.xxs} 0 0;
  `;
}

export function buttonDownStyle(theme) {
  return css`
    ${baseButtonStyle(theme)}
    border-radius: 0 0 ${theme.borderRadius.xxs} 0;
  `;
}

export function separatorStyle(theme) {
  return css`
    border-bottom: 1px solid ${theme.colors.borders.secondary[0]};
  `;
}
