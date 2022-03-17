import React from 'react';
import PropTypes from 'prop-types';
import categoryList from '../../translations/category.json';

function FilterCategory(props) {
  const categoryItems = categoryList;
  return (
    <div className="border-border border-solid border-r">
      <h2 className="font-bold h-28 pt-16 pl-8 border-border border-solid border-b">Filter by category</h2>
      <ul>
        {
            categoryItems.map((categoryItem) => (
              <li key={categoryItem.id} className=" border-b border-solid border-border cursor-pointer hover:bg-backgroundBtn">
                <label htmlFor={categoryItem.id} className="relative block leading-10 cursor-pointer pl-8">
                  {categoryItem.name}
                  <input className="absolute top-[40%] right-[5%]" type="checkbox" id={categoryItem.id} name={categoryItem.name} />
                </label>
              </li>
            ))
        }
      </ul>
    </div>
  );
}

FilterCategory.propTypes = {

};
export default FilterCategory;
