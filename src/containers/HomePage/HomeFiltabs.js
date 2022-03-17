import React from 'react';
import PropTypes from 'prop-types';

function HomeFiltabs(props) {
  return (
    <ul className="flex mb-8">
      <li className="w-16 mx-2 rounded border-backgroundBtn border border-solid bg-backgroundBtn text-center h-8 leading-8">
        All
      </li>
      <li className="w-16 mx-2 rounded border-backgroundBtn border border-solid text-center h-8 leading-8">
        Pro
      </li>
      <li className="w-16 mx-2 rounded border-backgroundBtn border border-solid text-center h-8 leading-8">
        Store
      </li>
    </ul>
  );
}
HomeFiltabs.propTypes = {

};
export default HomeFiltabs;
