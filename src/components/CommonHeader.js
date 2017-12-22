import React from 'react';

const CommonHeader = (props) => {
	return (
			<header className="common-header">
				<h1>{props.headerMessage} {props.userName}</h1>
			</header>
	);
}
export default CommonHeader;