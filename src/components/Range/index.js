import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";

import RangeStyles from "./RangeStyles";

import { layoutPropTypes, layoutDefaultProps } from "../../utils/layoutProps";

function Range({ min, value: valueProp, onChange: onChangeProp, ...props }) {
  const [value, setValue] = useState(valueProp || min);
  const onChange = useCallback(onChangeProp || setValue, [
    onChangeProp,
    setValue
  ]);
  useEffect(() => {
    setValue(valueProp);
  }, [valueProp, setValue]);
  return <RangeStyles {...props} min={min} value={value} onChange={onChange} />;
}

Range.propTypes = {
  ...layoutPropTypes,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool
};

Range.defaultProps = {
  ...layoutDefaultProps,
  min: 0,
  max: 100,
  disabled: false,
  readOnly: false
};

export default Range;
