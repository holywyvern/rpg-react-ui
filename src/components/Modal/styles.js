import { css } from "@emotion/core";

export function wrapperStyles(theme, open) {
  return css`
    display: ${open ? "flex" : "none"};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${theme.colors.shadow};
    align-items: center;
    justify-content: center;
    z-index: 100;
    overflow: hidden;
  `;
}

export function contentStyles(theme) {
  return css`
    position: relative;
    overflow: hidden;
    padding: ${theme.paddings.md};
    max-width: calc(100% - ${theme.paddings.md} * 2);
    max-height: calc(100% - ${theme.paddings.md} * 2);
    display: flex;
  `;
}

export function closeStyles(theme) {
  return css`
    position: absolute;
    top: 0;
    right: 0;
  `;
}
