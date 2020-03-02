import { css } from "@emotion/core";
import { layoutStyles } from "../../utils/layoutProps";

export function notebookStyles(theme, layout) {
  return css`
    ${layoutStyles(theme, layout)}
    display: flex;
    flex-direction: column-reverse;
  `;
}

export function contentStyles(theme) {
  return css`
    flex: 1;
    padding: ${theme.paddings.md};
    display: flex;
    flex-direction: column;
    overflow: auto;
    background: ${theme.colors.backgrounds.primary};
  `;
}

export function tabWrapperStyles(theme) {
  return css`
    flex: 1;
    border-bottom: 0;
    display: flex;
    overflow: visible;
    padding: 0 ${theme.borderRadius.xs};
  `;
}

export function listStyles(theme) {
  return css`
    flex: 1;
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
  `;
}
