import { css } from "@emotion/core";

export function wrapperStyles(theme) {
  return css`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
  `;
}

export function guideStyles() {
  return css`
    flex: 1;
    display: flex;
    flex-direction: row;
    overflow: hidden;
  `;
}

export function navStyles(theme) {
  return css`
    overflow: auto;
    background: ${theme.colors.backgrounds.primary};
  `;
}

export function contentStyles(theme) {
  return css`
    flex: 1;
    overflow: auto;
    padding: ${theme.paddings.md};
  `;
}
