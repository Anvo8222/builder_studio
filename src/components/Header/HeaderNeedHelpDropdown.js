import React from 'react';
import needHelpDropDownList from '../../translations/needHelpDropdown.json';

function NeedHelpDropdown(props) {
  const needHelpDropdowns = needHelpDropDownList;
  return (
    <>
      <img className="w-12 h-12" src="https://studio.builder.ai/assets/images/experticon1.png" alt="logo" />
      <span className="text-base block pt-2 pl-2 ">Talk to our experts</span>
      <ul className="absolute w-full text-sm hidden top-14 bg-white group-hover:block group-hover:z-50 after:absolute after:border-solid after:border-red after:-top-2 after:w-72 after:h-4 shadow-xl rounded-lg" style={{ backgroundColor: 'white' }}>
        {needHelpDropdowns.map((item) => (
          <li key={item.id} className="text-center p-2 cursor-pointer hover:bg-hover-btn pt-4 pb-4 pl-6 pr-6">
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default NeedHelpDropdown;
