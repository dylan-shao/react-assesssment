import React from 'react';

const Prev = (props) => {
	return (
		<button className={props.type} onClick={props.clickHandler}>{props.value}</button>
	);
}
export default Prev;