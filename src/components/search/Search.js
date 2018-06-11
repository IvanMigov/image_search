import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeSearchQuery, searchImages } from './actions';
import { getClassName } from '../../utils/component';

import './Search.scss';

const ccn = getClassName('search');

const Search = ({ queryString, onQueryChange, onSearchClick, onKeyDown}) => (
  <div className={ccn()}>
    <h1 className={ccn('title')}>Image search</h1>
    <input
      value={queryString}
      className={ccn('input')}
      onChange={onQueryChange}
      onKeyDown={onKeyDown}
      placeholder="search text"
    />
    <button
      className={ccn('button')}
      onClick={onSearchClick}
    >Search</button>
  </div>
);



Search.propTypes = {
  queryString:   PropTypes.string,
  onQueryChange: PropTypes.func,
  onSearchClick: PropTypes.func
};

const mapStateToProps = ({ search: { queryString } }) => ({ queryString });
const mapDispatchToProps = (dispatch) => ({
  onQueryChange: (e) => dispatch(changeSearchQuery(e.target.value)),
  onSearchClick: () => dispatch(searchImages()),
  onKeyDown: (e) => {
    if (e.key === 'Enter') {
      dispatch(searchImages())
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
