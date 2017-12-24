import React from 'react';
import PropTypes from 'prop-types';

const PrevNext = ({ type, clickHandler, value }) => (
  <button className={type} onClick={clickHandler}>
    {value}
  </button>
);

PrevNext.defaultProps = {
  type: '',
};

PrevNext.propTypes = {
  type: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default PrevNext;
