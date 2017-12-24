import React from 'react';

const PrevNext = ({ type, clickHandler, value }) => (
  <button className={type} onClick={clickHandler}>
    {value}
  </button>
);

export default PrevNext;
