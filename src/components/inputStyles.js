export function baseInputStyles(theme) {
  return `
  display: block;
  box-sizing: border-box;
  background: ${theme.colors.backgrounds.input};
  border: ${theme.borders.sm} solid ${theme.colors.borders.input};
  color: ${theme.colors.texts.input};
  padding: ${theme.paddings.rg} ${theme.paddings.sm};
  border-radius: ${theme.borderRadius.xxs};
  box-shadow: 0px 1px 0px 1px ${theme.colors.shadow};
  margin: 0;

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
