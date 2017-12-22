import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommonHeader from '../components/CommonHeader';


class Header extends Component {
	shouldComponentUpdate(){
		return true;
	}

	render() {
		return (
			<div className="header">
				<CommonHeader headerMessage={this.props.headerMessage} userName={this.props.userName}/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		
	};
}

export default connect(mapStateToProps, null)(Header);