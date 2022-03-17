import React, { useState } from 'react';
import PropTypes from 'prop-types';
import currencyDropdownList from '../../translations/currency.json';

function HeaderCurrencyDropdown(props) {
  const [iconIndex, setIconIndex] = useState(2);
  const handleOnClick = (index) => {
    setIconIndex(index);
  };
  return (
    <ul className="absolute bg-backgroundColor w-[210px] top-[52px] rounded-md right-0 border-solid border-border border">
      {currencyDropdownList.map((item, index) => (
        <div
          key={item.id}
          onClick={() => handleOnClick(index)}
          role="button"
          tabIndex="0"
        >
          <li className="flex p-2 border-solid border-border border-b hover:bg-hover-btn">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
            </svg>
            <span className="ml-2">{item.name}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 bg-checked ${index === iconIndex ? 'block' : 'hidden'} rounded-[50%] text-backgroundColor absolute right-2`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </li>
        </div>
      ))}
    </ul>
  );
}
HeaderCurrencyDropdown.propTypes = {

};
export default HeaderCurrencyDropdown;
