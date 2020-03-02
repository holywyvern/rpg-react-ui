import React, { useState, Children, useCallback } from "react";
import PropTypes from "prop-types";

import Modal from "../Modal";

import SelectMenu from "./SelectMenu";

import { layoutPropTypes, layoutDefaultProps } from "../../utils/layoutProps";

import {
  wrapperStyles,
  inputStyles,
  caretStyles,
  inputWrapperStyles
} from "./styles";

const preventDefault = e => e.preventDefault();

function SelectStyles({
  name,
  children,
  value,
  placeholder,
  onChange,
  header,
  footer,
  ...layout
}) {
  const [isOpen, setOpen] = useState(false);
  const options = Children.toArray(children).map(c => c.props);
  const selectedOption = options.find(o => o.value === value);
  const onSelection = useCallback(
    value => {
      setOpen(false);
      onChange(value);
    },
    [onChange, children]
  );
  return (
    <div css={theme => wrapperStyles(theme, layout)}>
      <input
        name={name}
        type="hidden"
        value={value}
        readOnly
        onChange={preventDefault}
      />
      <div css={inputWrapperStyles}>
        <input
          css={inputStyles}
          type="text"
          value={
            selectedOption && (selectedOption.label || selectedOption.children)
          }
          onChange={preventDefault}
          onClick={e => setOpen(!isOpen)}
          onKeyPress={e => {
            if (e.key === "Spacebar" || e.key === " " || e.key == "Enter") {
              e.preventDefault();
              setOpen(true);
            }
          }}
          readOnly
          placeholder={placeholder}
        />
        <div css={caretStyles}>{isOpen ? "▲" : "▼"}</div>
      </div>
      <Modal open={isOpen} onClose={() => setOpen(false)}>
        {header}
        <SelectMenu
          visible={isOpen}
          value={value}
          onChange={onSelection}
          children={children}
        />
        {footer}
      </Modal>
    </div>
  );
}

SelectStyles.propTypes = {
  ...layoutPropTypes,
  children: PropTypes.node,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  header: PropTypes.node,
  footer: PropTypes.node
};

SelectStyles.defaultProps = {
  ...layoutDefaultProps
};

export default SelectStyles;
