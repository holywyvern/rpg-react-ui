import { css } from "@emotion/core";
import { layoutStyles } from "../../utils/layoutProps";

function thumbStyles(theme) {
  return `
  border: ${theme.borders.sm} solid ${theme.colors.borders.secondary};
  height: 27px;
  width: 12px;
  border-radius: ${theme.borderRadius.xxs};
  background: ${theme.colors.backgrounds.secondary};
  cursor: pointer;
  box-shadow: 0px 1px 0px 1px ${theme.colors.shadow};  
  `;
}

function trackStyles(theme) {
  return `
  width: 100%;
  height: 7px;
  cursor: pointer;
  box-shadow: 0px 1px 0px 1px ${theme.colors.shadow};
  background: ${theme.colors.backgrounds.accent};
  border-radius: ${theme.borderRadius.xxs};
  border: ${theme.borders.xs} solid ${theme.colors.borders.accent};
  `;
}

function trackFocusStyles(theme) {
  return `
  background: ${theme.colors.backgrounds.accent};
`;
}

export default function rangeStyles(theme, layout) {
  return css`
    ${layoutStyles(theme, layout)}
    -webkit-appearance: none;
    width: 100%;
    background: transparent;
    padding: 10px 0;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
    }

    &::-ms-track {
      width: 100%;
      cursor: pointer;

      background: transparent;
      border-color: transparent;
      color: transparent;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      margin-top: -9px;
      ${thumbStyles(theme)}
    }

    &::-moz-range-thumb {
      box-shadow: 0px 1px 0px 1px ${theme.colors.shadow};
      ${thumbStyles(theme)}
    }

    &::-ms-thumb {
      ${thumbStyles(theme)}
    }

    &::-webkit-slider-runnable-track {
      ${trackStyles(theme)}
    }

    &:focus::-webkit-slider-runnable-track {
      ${trackFocusStyles(theme)}
    }

    &::-moz-range-track {
      ${trackStyles(theme)}
    }

    &::-ms-track {
      ${trackStyles(theme)}
    }

    &::-ms-fill-lower {
      ${trackStyles(theme)}
    }

    &:focus::-ms-fill-lower {
      ${trackFocusStyles(theme)}
    }

    &::-ms-fill-upper {
      ${trackStyles(theme)}
    }

    &:focus::-ms-fill-upper {
      ${trackFocusStyles(theme)}
    }

    &:hover {
      filter: brightness(110%);
    }

    &:focus {
      outline: 0;

      &::-webkit-slider-thumb {
        background: ${theme.colors.backgrounds.input};
        border-color: ${theme.colors.borders.input};
      }

      &::-moz-range-thumb {
        background: ${theme.colors.backgrounds.input};
        border-color: ${theme.colors.borders.input};
      }

      &::-ms-thumb {
        background: ${theme.colors.backgrounds.input};
        border-color: ${theme.colors.borders.input};
      }
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.7;
      filter: brightness(50%);

      &::-webkit-slider-thumb {
        cursor: not-allowed;
      }

      &::-moz-range-thumb {
        cursor: not-allowed;
      }

      &::-ms-thumb {
        cursor: not-allowed;
      }

      &::-webkit-slider-thumb {
        cursor: not-allowed;
      }

      &::-moz-track {
        cursor: not-allowed;
      }

      &::-ms-track {
        cursor: not-allowed;
      }
    }
  `;
}
