import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { layoutPropTypes, layoutDefaultProps } from "../../utils/layoutProps";

import Input from "./Input";

function NumberInput({
  value: valueProp,
  min,
  onChange: onValueChange,
  ...rest
}) {
  const [value, setValue] = useState(valueProp || "");
  useEffect(() => setValue(valueProp || value), [value, valueProp]);
  const onChange = useCallback(onValueChange || setValue, [
    onValueChange,
    setValue
  ]);
  return <Input {...rest} value={value} min={min} onChange={onChange} />;
}

NumberInput.popTypes = {
  ...layoutPropTypes,
  name: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  readOnly: PropTypes.bool
};

NumberInput.defaultProps = {
  ...layoutDefaultProps,
  step: 1,
  disabled: false,
  required: false,
  readOnly: false
};

export default NumberInput;
