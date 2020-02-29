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
  `;
}

export function contentStyles(theme) {
  return css`
    position: relative;
  `;
}

export function closeStyles(theme) {
  return css`
    position: absolute;
    top: -${theme.borderRadius.xs};
    right: calc(-${theme.borderRadius.xs} / 2);
  `;
}
