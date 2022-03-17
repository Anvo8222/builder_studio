import React from 'react';
import PropTypes from 'prop-types';
import costList from '../../translations/costs.json';

function FilterCost(props) {
  const costItems = costList;
  return (
    <>
      <h2 className="font-bold pl-8 h-28 pt-16 border-border border-solid border-b">Filter by cost</h2>
      <ul>
        {costItems.map((costItem) => (
          <li key={costItem.id} className="border-b relative border-solid border-border cursor-pointer hover:bg-backgroundBtn">
            <label htmlFor={costItem.name} className="relative block leading-10 cursor-pointer pl-8">
              {costItem.name}
              <input className="absolute top-[40%] right-[5%]" type="checkbox" id={costItem.name} name={costItem.name} />
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}

FilterCost.propTypes = {

};
export default FilterCost;
