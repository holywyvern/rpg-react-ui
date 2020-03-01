import React, { useRef, useCallback } from "react";
import PropTypes from "prop-types";

import {
  wrapperStyles,
  inputStyles,
  buttonWrapperStyles,
  buttonUpStyle,
  buttonDownStyle,
  separatorStyle
} from "./styles";

function Input({
  name,
  min,
  max,
  value,
  onChange,
  step,
  disabled,
  required,
  readOnly,
  ...layout
}) {
  const inputRef = useRef();
  const focusInput = useCallback(
    () => inputRef.current && inputRef.current.focus(),
    [inputRef.current]
  );

  const moveUp = e => e.button == 0 && onChange(Number(value) + step);
  const moveDown = e => e.button == 0 && onChange(Number(value) - step);
  return (
    <div css={theme => wrapperStyles(theme, layout)}>
      <input
        ref={inputRef}
        css={inputStyles}
        type="number"
        name={name}
        min={min}
        max={max}
        value={value}
        onChange={e => onChange(e.target.value)}
        step={step}
        disabled={disabled}
        required={required}
        readOnly={readOnly}
      />
      <div css={buttonWrapperStyles}>
        <button
          css={buttonUpStyle}
          type="button"
          onFocus={focusInput}
          onClick={moveUp}
          disabled={disabled || readOnly}
        >
          ▲
        </button>
        <div css={separatorStyle} />
        <button
          css={buttonDownStyle}
          type="button"
          onFocus={focusInput}
          onClick={moveDown}
          disabled={disabled || readOnly}
        >
          ▼
        </button>
      </div>
    </div>
  );
}

Input.popTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired
};

Input.defaultProps = {
  step: 1
};

export default Input;
