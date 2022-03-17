import React from 'react';
import PropTypes from 'prop-types';

function SortList({ sortFilterList }) {
  console.log('sortFilterList', sortFilterList);
  return (
    <ul className="absolute w-52 bg-backgroundColor top-14 right-[0px] border-border border-solid border">
      {sortFilterList.map((item) => (
        <li key={item.id} className="p-2 cursor-pointer hover:bg-hover-btn border-border border-solid border-b">
          <input id={item.name} type="radio" name="gender" />
          <label htmlFor={item.name} className="ml-2 cursor-pointer">{item.name}</label>
        </li>
      ))}
    </ul>
  );
}
SortList.propTypes = {
  sortFilterList: PropTypes.array,
};
export default SortList;
