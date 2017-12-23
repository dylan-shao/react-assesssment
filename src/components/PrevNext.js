import React from 'react';

const PrevNext = (props) => {
	return (
		<button className={props.type} onClick={props.clickHandler}>{props.value}</button>
	);
}
export default PrevNext;