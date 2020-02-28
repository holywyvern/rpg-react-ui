import PropTypes from "prop-types";

export const SIZES = [null, "xs", "sm", "lg", "xl"];

const ALIGN_SELF_STYLES = {
  start: "align-self: flex-start;",
  end: "align-self: flex-end;",
  center: "align-self: center;",
  stretch: "align-self: stretch;"
};

export const layoutPropTypes = {
  flexGrow: PropTypes.bool,
  align: PropTypes.oneOf(["start", "end", "center", "stretch", false, null]),
  padding: PropTypes.oneOf(SIZES),
  margin: PropTypes.oneOf(SIZES)
};

export const layoutDefaultProps = {
  flexGrow: false,
  align: null
};

export function layoutStyles(theme, { flexGrow, align, padding, margin }) {
  return (
    "\n" +
    [
      flexGrow ? "flex: 1;" : null,
      align ? ALIGN_SELF_STYLES[align] : null,
      padding && `padding: ${theme.paddings[padding]};`,
      margin && `margin: ${theme.margins[padding]};`
    ]
      .map(i => i)
      .join("\n")
  );
}
