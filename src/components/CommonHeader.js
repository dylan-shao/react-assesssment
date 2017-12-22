import React from 'react';

const CommonHeader = ({headerMessage, userName}) => {
	return (
		<div>
			<header className="common-header">
				<h1>{headerMessage} {userName}this is header</h1>
			</header>
		</div>
	);
}
export default CommonHeader;