import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Filters from '../../components/Filters';
import ToolBars from '../ToolBars';
import HomeFiltabs from './HomeFiltabs';
import HomeProducts from './HomeProducts';
import Cart from '../../components/Cart';

function HomePage(props) {
  return (
    <>
      <Header />
      <div className="mt-32 flex flex-row">
        <Filters />
        <div className="basis-5/6">
          <ToolBars />
          <div className="mt-28 ml-4">
            <HomeFiltabs />
            <p>
              Choose up to 3 templates (apps similar to your idea) to use as a base.
            </p>
            <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-4 mt-8">
              <HomeProducts />
            </div>
          </div>
        </div>
        <Cart />
      </div>
    </>
  );
}
HomePage.propTypes = {

};

export default HomePage;
