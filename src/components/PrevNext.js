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

const { string, func } = PropTypes;
PrevNext.propTypes = {
  type: string,
  clickHandler: func.isRequired,
  value: string.isRequired,
};

export default PrevNext;
