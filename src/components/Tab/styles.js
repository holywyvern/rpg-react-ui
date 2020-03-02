import { css } from "@emotion/core";

export function tabStyles(theme, selected, expand) {
  return css`
    ${expand ? "flex: 1;" : ""}
    align-self: flex-end;
    border: ${theme.borders.xs} solid ${theme.colors.borders.primary[0]};
    border-bottom: 0;
    border-radius: ${theme.borderRadius.xs} ${theme.borderRadius.xs} 0 0;
    background: ${theme.colors.borders.primary[0]};
    color: ${theme.colors.texts.primary};
    position: relative;
    top: ${selected
      ? `calc(${theme.borders.xs} * 2 + ${theme.borders.md})`
      : 0};
    z-index: ${selected ? "1" : "0"};
    cursor: ${selected ? "default" : "pointer"};
    display: flex;
    filter: brightness(${selected ? 100 : 50}%);

    &:focus {
      outline: 0;
    }

    ${selected
      ? `
      &::before {
        position: absolute;
        content: '';
        bottom: 0;
        left: -1px;
        width: calc(${theme.borderRadius.xs} - 3px);
        height: calc(${theme.borderRadius.xs} - 3px);
        background: ${theme.colors.borders.primary[2]};
        opacity: 0.8;
      }

      &::after {
        position: absolute;
        content: '';
        bottom: 0;
        right: -1px;
        width: calc(${theme.borderRadius.xs} - 3px);
        height: calc(${theme.borderRadius.xs} - 3px);
        background: ${theme.colors.borders.primary[2]};
      }
    `
      : ""}
  `;
}

export function tabMiddleStyles(theme, selected) {
  return css`
    flex: 1;
    display: flex;
    border: ${theme.borders.xs} solid ${theme.colors.borders.primary[1]};
    border-bottom: 0;
    border-radius: calc(${theme.borderRadius.xs} - 1px)
      calc(${theme.borderRadius.xs} - 1px) 0 0;
  `;
}

export function tabContentStyles(theme, selected) {
  return css`
    flex: 1;
    display: flex;
    justify-content: center;
    border: ${theme.borders.md} solid ${theme.colors.borders.primary[2]};
    padding: ${theme.paddings.md};
    padding-bottom: ${selected ? theme.paddings.md : "0"};
    border-radius: calc(${theme.borderRadius.xs} - 1px)
      calc(${theme.borderRadius.xs} - 1px) 0 0;
    border-bottom: 0;
    background: ${theme.colors.backgrounds.primary};
  `;
}
