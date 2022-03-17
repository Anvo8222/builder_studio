import React from 'react';
import PropTypes from 'prop-types';

function HeaderLogo(props) {
  return (
    <div className="basis-1/6 min-w-[280px] flex justify-center justify-items-center border-border border-solid border-x-2 h-full">
      <img src="https://studio.builder.ai/assets/images/engineer-logo.svg" className="w-40 h-32" alt="logo" />
    </div>
  );
}

export default HeaderLogo;
