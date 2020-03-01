import { css } from "@emotion/core";

import { layoutStyles, scrollbarStyles } from "../../utils/layoutProps";

export function wrapperStyles(theme, layout) {
  return css`
    ${layoutStyles(theme, layout)}
    display: flex;
  `;
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
      cursor: pointer;
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

export function listWrapperStyles(theme) {
  return css`
    overflow: hidden;
    display: flex;
    flex-direction: column;
  `;
}

export function listStyles(theme) {
  return css`
    list-style-type: none;
    margin: 0;
    padding: 0;
    background: ${theme.colors.backgrounds.highlights};
    border: ${theme.borders.sm} solid ${theme.colors.borders.primary[0]};
    overflow: auto;
    display: flex;
    flex-direction: column;

    &:focus {
      outline: 0;
      border-color: ${theme.colors.borders.positive[0]};
    }

    ${scrollbarStyles(theme)}
  `;
}

export function optionStyle(theme, selected, current) {
  return css`
    padding: ${theme.paddings.sm};
    cursor: pointer;
    display: flex;
    flex-direction: column;
    ${selected &&
      `
      font-weight: bold;
      background: ${theme.colors.backgrounds.positive};
      color: ${theme.colors.texts.positive};
    `}
    ${current &&
      `
      font-weight: bolder;
    `}
  `;
}
