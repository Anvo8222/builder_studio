import React from 'react';
import PropTypes from 'prop-types';
import sortBy from '../../../translations/sortByFilter.json';
import SortList from './SortList';

function RepoSort(props) {
  const sortByFilters = sortBy;
  console.log('sortByFilters', sortByFilters);
  return (
    <SortList sortFilterList={sortByFilters}></SortList>

  );
}
RepoSort.propTypes = {

};
export default RepoSort;
