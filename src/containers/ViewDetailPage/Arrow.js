import React from 'react';
import PropTypes from 'prop-types';

function Arrow(props) {
  const { type, onClick } = props;
  let className = type === 'next' ? 'nextArrow' : 'prevArrow';
  className += 'arrow';
  const char = type === 'next' ? '👉' : '👈';
  return (

    <span
      className={className}
      onClick={onClick}
      role="button"
      tabIndex="0"
    >
      {char}
    </span>

  );
}
Arrow.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
};
export default Arrow;
