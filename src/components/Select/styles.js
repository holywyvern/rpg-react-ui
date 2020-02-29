import { css } from "@emotion/core";

import { layoutStyles } from "../../utils/layoutProps";

export function wrapperStyles(theme, layout) {
  return css`
    ${layoutStyles(theme, layout)}
    display: flex;
  `;
}

export function itemStyles(theme, isOpen) {
  return css``;
}

export function listStyles(theme) {
  return css``;
}

export function inputStyles(theme) {
  return css`
    flex: 1;
    box-sizing: border-box;
    background: ${theme.colors.backgrounds.input};
    border: ${theme.borders.sm} solid ${theme.colors.borders.input};
    background: ${theme.colors.backgrounds.input};
    color: ${theme.colors.texts.input};
    padding: ${theme.paddings.sm} ${theme.paddings.xs};
    border-radius: ${theme.borderRadius.xxs};

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
  `;
}

export function caretStyles(theme) {
  return css`
    position: absolute;
    top: 0;
    left: 0;
    right: ${theme.paddings.sm};
    bottom: 0;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: ${theme.colors.borders.input};
  `;
}

export function inputWrapperStyles(theme) {
  return css`
    flex: 1;
    display: flex;
    position: relative;
  `;
}
