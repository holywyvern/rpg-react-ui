import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

import { layoutPropTypes, layoutDefaultProps } from "../../utils/layoutProps";

import SelectStyles from "./SelectStyles";

function Select({ value: valueProp, onChange: onChangeProp, ...props }) {
  const [value, setValue] = useState(value);
  const onChange = useCallback(onChangeProp || setValue, [onChangeProp]);
  useEffect(() => setValue(valueProp), [valueProp]);
  return <SelectStyles {...props} onChange={onChange} value={value} />;
}

Select.propTypes = {
  ...layoutPropTypes,
  children: PropTypes.node,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any
};

Select.defaultProps = {
  ...layoutDefaultProps
};

export default Select;
