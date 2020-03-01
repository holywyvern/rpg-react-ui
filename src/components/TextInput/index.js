import React from "react";
import PropTypes from "prop-types";
import { layoutPropTypes, layoutDefaultProps } from "../../utils/layoutProps";
import inputStyles from "./styles";

function TextInput({
  type,
  name,
  value,
  onChange,
  disabled,
  pattern,
  required,
  minLength,
  maxLength,
  placeholder,
  spellCheck,
  readOnly,
  list,
  ...layout
}) {
  return (
    <input
      list={list}
      css={theme => inputStyles(theme, layout)}
      type={type}
      name={name}
      value={onChange && value}
      defaultValue={!onChange && value}
      onChange={onChange && (e => onChange(e.target.value))}
      disabled={disabled}
      pattern={pattern}
      required={required}
      minLength={minLength}
      maxLength={maxLength}
      placeholder={placeholder}
      spellCheck={spellCheck}
      readOnly={readOnly}
    />
  );
}

TextInput.propTypes = {
  ...layoutPropTypes,
  type: PropTypes.oneOf(["text", "search", "password", "email", "url", "tel"]),
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  pattern: PropTypes.string,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  spellCheck: PropTypes.bool,
  list: PropTypes.string,
  readOnly: PropTypes.bool
};

TextInput.defaultProps = {
  ...layoutDefaultProps,
  type: "text",
  disabled: false,
  required: false,
  spellCheck: false,
  readOnly: false
};

export default TextInput;
