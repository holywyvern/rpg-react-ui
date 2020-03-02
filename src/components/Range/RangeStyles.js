import React from "react";

import inputStyles from "./styles";

function RangeStyles({
  min,
  max,
  value,
  step,
  onChange,
  disabled,
  readOnly,
  ...layout
}) {
  return (
    <input
      css={theme => inputStyles(theme, layout)}
      type="range"
      min={min}
      max={max}
      onChange={e => onChange(Number(e.target.value))}
      value={value}
      step={step}
      disabled={disabled}
      readOnly={readOnly}
    />
  );
}

export default RangeStyles;
