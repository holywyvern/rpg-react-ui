import PropTypes from "prop-types";

export const SIZES = [null, "xs", "sm", "md", "lg", "xl"];

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
  paddingTop: PropTypes.oneOf(SIZES),
  paddingLeft: PropTypes.oneOf(SIZES),
  paddingRight: PropTypes.oneOf(SIZES),
  paddingDown: PropTypes.oneOf(SIZES),
  margin: PropTypes.oneOf(SIZES),
  marginTop: PropTypes.oneOf(SIZES),
  marginLeft: PropTypes.oneOf(SIZES),
  marginRight: PropTypes.oneOf(SIZES),
  marginDown: PropTypes.oneOf(SIZES)
};

export const layoutDefaultProps = {
  flexGrow: false,
  align: null
};

function flexLayouts({ flexGrow, align }) {
  return [
    flexGrow ? "flex: 1;" : null,
    align ? ALIGN_SELF_STYLES[align] : null
  ];
}

function layoutPadding(
  theme,
  { padding, paddingTop, paddingBottom, paddingLeft, paddingRight }
) {
  return [
    padding && `padding: ${theme.paddings[padding]};`,
    paddingTop && `padding-top: ${theme.paddings[paddingTop]};`,
    paddingBottom && `padding-bottom: ${theme.paddings[paddingBottom]};`,
    paddingLeft && `padding-left: ${theme.paddings[paddingLeft]};`,
    paddingRight && `padding-right: ${theme.paddings[paddingRight]};`
  ];
}

function layoutMargin(
  theme,
  { margin, marginTop, marginBottom, marginLeft, marginRight }
) {
  return [
    margin && `margin: ${theme.margins[margin]};`,
    marginTop && `margin-top: ${theme.margins[marginTop]};`,
    marginBottom && `margin-bottom: ${theme.margins[marginBottom]};`,
    marginLeft && `margin-left: ${theme.margins[marginLeft]};`,
    marginRight && `margin-right: ${theme.margins[marginRight]};`
  ];
}

export function layoutStyles(theme, layout) {
  return (
    "\n" +
    [
      ...flexLayouts(layout),
      ...layoutPadding(theme, layout),
      ...layoutMargin(theme, layout)
    ]
      .map(i => i)
      .join("\n")
  );
}

export function scrollbarStyles(theme) {
  return `
    &::-webkit-scrollbar {
      width: 8px; /* 1px wider than Lion. */
      background-color: rgba(0, 0, 0, 0);
      -webkit-border-radius: 100px;
    }

    &::-webkit-scrollbar:hover {
      background-color: ${theme.colors.borders.primary[2]};
    }

    &::-webkit-scrollbar-thumb:vertical {
      background: ${theme.colors.borders.primary[0]};
      -webkit-border-radius: 100px;
    }

    &::-webkit-scrollbar-thumb:vertical:active {
      background: ${theme.colors.borders.primary[0]};
      -webkit-border-radius: 100px;
    }      
  `;
}
