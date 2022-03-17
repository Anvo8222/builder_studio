import React from 'react';
import PropTypes from 'prop-types';
import FilterRepoCost from './FilterCost';
import FilterCategory from './FilterCategory';

function Filters(props) {
  return (
    <div className="basis-1/6 min-w-[290px]">
      <div className="fixed max-h-[700px] min-w-[286px] overflow-hidden overflow-y-auto bg-scroll">
        <FilterCategory />
        <FilterRepoCost />
      </div>
    </div>
  );
}

Filters.propTypes = {

};
export default Filters;
