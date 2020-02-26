import React from "react";
import { css } from "@emotion/core";
import { useTheme } from "emotion-theming";

function wrapperStyle(theme) {
  return css`
    border: ${theme.borders.xs} solid ${theme.colors.borders.primary[0]};
    border-radius: ${theme.borderRadius.xs};
    box-shadow: 0 ${theme.shadows.xs} 0 0 ${theme.colors.shadow};
  `;
}

function middleStyle(theme) {
  return css`
    border: ${theme.borders.xs} solid ${theme.colors.borders.primary[1]};
    border-radius: calc(${theme.borderRadius.xs} - 1px);
  `;
}

function contentStyle(theme) {
  return css`
    border: ${theme.borders.md} solid ${theme.colors.borders.primary[2]};
    padding: ${theme.paddings.md};
    border-radius: calc(${theme.borderRadius.xs} - 1px);
    background-color: ${theme.colors.backgrounds.primary};
    color: ${theme.colors.texts.primary};
  `;
}

function Card({ children }) {
  const theme = useTheme();
  return (
    <div css={wrapperStyle(theme)}>
      <div css={middleStyle(theme)}>
        <div css={contentStyle(theme)}>{children}</div>
      </div>
    </div>
  );
}

export default Card;
