import React, { useState, useEffect, Children, cloneElement } from "react";
import PropTypes from "prop-types";
import { layoutPropTypes, layoutDefaultProps } from "../../utils/layoutProps";
import {
  notebookStyles,
  contentStyles,
  tabWrapperStyles,
  listStyles
} from "./styles";
import Card from "../Card";

function Notebook({ children, selected, onChange, ...layout }) {
  const [index, setIndex] = useState(selected || 0);
  const selectedChild = Children.toArray(children)[index];
  useEffect(() => {
    typeof selected === "number" && setIndex(selected);
  }, [selected]);
  return (
    <div css={theme => notebookStyles(theme, layout)}>
      <Card flexGrow paddingTop="0">
        {selectedChild && selectedChild.props.children}
      </Card>
      <nav css={tabWrapperStyles}>
        <ul css={listStyles}>
          {Children.map(children, (c, i) =>
            cloneElement(c, {
              selected: i === index,
              index: i,
              onChange: onChange || setIndex
            })
          )}
        </ul>
      </nav>
    </div>
  );
}

Notebook.propTypes = {
  ...layoutPropTypes,
  children: PropTypes.node,
  selected: PropTypes.bool,
  onChange: PropTypes.func
};

Notebook.defaultProps = {
  ...layoutDefaultProps
};

export default Notebook;
