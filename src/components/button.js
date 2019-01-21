import React from "react";
//import PropTypes from "prop-types";

const Button = props => {
  let className = `btn btn-${props.color}`;
  return (
    <a href={props.href} className={className}>
      {props.value}
    </a>
  );
};

/*
Button.propTypes = {
  color: PropTypes.oneOf([
    "primary", // primary color, no underline
    "secondary" // inherit surrounding styles
  ]),
  href: PropTypes.string.isRequired
};*/

export default Button;
