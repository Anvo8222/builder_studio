import React, { useState } from 'react';
import PropTypes from 'prop-types';
import HeaderNeedHelpDropdown from './HeaderNeedHelpDropdown';
import HeaderCurrencyDropdown from './HeaderCurrenDropdown';
import HeaderLogo from './HeaderLogo';
import HeaderTutorial from './HeaderTutorial';
import HeaderSignIn from './HeaderSignIn';

function Header(props) {
  const [currency, setCurrency] = useState(false);
  const handleCurrencyClick = () => {
    setCurrency(!currency);
  };
  return (
    <header className="h-32 bg-backgroundColor fixed inset-0 mx border-border border-solid border-2 z-20">
      <div className="flex items-center flex-row h-full">
        <HeaderLogo />
        <div className="basis-5/6 flex justify-between">
          <HeaderTutorial />
          <ul className="flex text-base mr-6">
            <li className="flex group cursor-pointer mr-2 relative pr-2 border-solid border-border border hover:bg-hover-btn ">
              <HeaderNeedHelpDropdown />
            </li>
            {/* onClick={() => setCurrency(true)} */}
            <li className="relative cursor-pointer mr-2 pt-2 pr-2 border-solid border-border border hover:bg-hover-btn">
              <div
                className="flex w-full"
                onClick={handleCurrencyClick}
                role="button"
                tabIndex="0"
                onKeyDown={handleCurrencyClick}
              >
                <span className="pl-2 ">
                  USD
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 " viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              {currency ? <HeaderCurrencyDropdown /> : false}
            </li>
            <HeaderSignIn />
          </ul>
        </div>
      </div>
    </header>
  );
}
Header.propTypes = {

};
export default Header;
