import React from 'react';
import PropTypes from 'prop-types';

const Emoji = props => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
        style={props.size?{fontSize: props.size+"px"}:{}}
    >
        {props.symbol}
    </span>
);

Emoji.propTypes = {
  label: PropTypes.string,
  symbol: PropTypes.string,
  size: PropTypes.number
}
export default Emoji;