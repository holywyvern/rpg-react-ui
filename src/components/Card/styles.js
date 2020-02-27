import { css } from "@emotion/core";
import { flexStyles } from "../../utils/flexProps";

export function wrapperStyle(theme, layout) {
  return css`
    ${flexStyles(layout)}
    border: ${theme.borders.xs} solid ${theme.colors.borders.primary[0]};
    border-radius: ${theme.borderRadius.xs};
    box-shadow: 0 ${theme.shadows.xs} 0 0 ${theme.colors.shadow};
    background: ${theme.colors.borders.primary[0]};
  `;
}

export function middleStyle(theme, layout) {
  return css`
    ${flexStyles(layout)}
    border: ${theme.borders.xs} solid ${theme.colors.borders.primary[1]};
    border-radius: calc(${theme.borderRadius.xs} - 1px);
    box-shadow: 0px 0px 0px 1px ${theme.colors.borders.primary[0]};
    background-image: repeating-linear-gradient(
      135deg,
      ${theme.colors.backgrounds.highlights},
      ${theme.colors.backgrounds.highlights} 1px,
      ${theme.colors.backgrounds.primary} 1px,
      ${theme.colors.backgrounds.primary} 10px
    );
  `;
}

export function contentStyle(theme, layout) {
  return css`
    ${flexStyles(layout)}
    border: ${theme.borders.md} solid ${theme.colors.borders.primary[2]};
    padding: ${theme.paddings.md};
    border-radius: calc(${theme.borderRadius.xs} - 1px);
    box-shadow: 0px 0px 0px 1px ${theme.colors.borders.primary[1]};
    background: repeating-linear-gradient(
      135deg,
      ${theme.colors.backgrounds.primary},
      transparent 50%,
      transparent 100%
    );
    color: ${theme.colors.texts.primary};
  `;
}
