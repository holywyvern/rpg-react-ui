import PropTypes from "prop-types";

const ALIGN_SELF_STYLES = {
  start: "align-self: flex-start;",
  end: "align-self: flex-end;",
  center: "align-self: center;",
  stretch: "align-self: stretch;"
};

export const flexPropTypes = {
  flexGrow: PropTypes.bool,
  align: PropTypes.oneOf(["start", "end", "center", "stretch", false, null])
};

export const flexDefaultProps = {
  flexGrow: false,
  align: null
};

export function flexStyles({ flexGrow, align }) {
  return (
    "\n" +
    [flexGrow ? "flex: 1;" : null, align ? ALIGN_SELF_STYLES[align] : null]
      .map(i => i)
      .join("\n")
  );
}
