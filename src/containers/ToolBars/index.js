import React from 'react';
import PropTypes from 'prop-types';

import Search from './Search';
import Custom from './Custom';
import Sort from './Sort';
import Filter from './Filter';

function ToolBars(props) {
  return (
    <div className="fixed right-0 left-72 flex z-10 justify-between h-28 ml-4 bg-backgroundColor">
      <div className="flex font-bold text-4xl justify-center items-center">
        <span>Choose a base</span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 pt-2 mx-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        <lord-icon src="https://cdn.lordicon.com/ahatttod.json" trigger="loop" colors="primary:#6c00ea,secondary:#08a88a" stroke={100} style={{ width: '60px', height: '60px' }} />
      </div>
      <ul className="flex items-center justify-center mr-8">
        <Search />
        <Custom />
        <Sort />
        <Filter />
      </ul>
    </div>
  );
}
ToolBars.propTypes = {

};
export default ToolBars;
