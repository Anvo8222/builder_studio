import React, { useState } from 'react';
import RepoSort from './RepoSort';

function Sorts(props) {
  const [first, setfirst] = useState(false);
  const handleCurrencyClick = () => setfirst(!first);
  return (
  // onClick={handleOnClick}
    <li className="py-3 mx-2 px-2 relative border-border border-solid border cursor-pointer hover:bg-hover-btn">
      <div
        onClick={handleCurrencyClick}
        role="button"
        tabIndex="0"
        onKeyDown={handleCurrencyClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
        {first ? <RepoSort /> : false}
      </div>
    </li>
  );
}

Sorts.propTypes = {

};
export default Sorts;
