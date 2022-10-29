import React from "react";
import PropTypes from "prop-types";

/**
 * Component for displaying emojis of required size
 * @param {*} props
 * @returns emoji within a span tag
 */
const Emoji = (props) => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
    style={props.size ? { fontSize: props.size + "px" } : {}}
  >
    {props.symbol}
  </span>
);

Emoji.propTypes = {
  /** label for the span tag if the emoji does not render */
  label: PropTypes.string,
  /** emoji */
  symbol: PropTypes.string,
  /** fontsize of the emoji */
  size: PropTypes.number,
};
export default Emoji;
