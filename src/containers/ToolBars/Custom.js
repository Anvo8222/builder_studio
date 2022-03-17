import React from 'react';
import PropTypes from 'prop-types';
import { IoIosAdd } from 'react-icons/io';

function Custom(props) {
  return (
    <li className="py-3  mx-2 px-2 border-border border-solid border cursor-pointer hover:bg-hover-btn">
      <span className="flex">
        <span className="mt-1"><IoIosAdd /></span>
        Custom Template
      </span>
    </li>
  );
}

Custom.propTypes = {

};
export default Custom;
