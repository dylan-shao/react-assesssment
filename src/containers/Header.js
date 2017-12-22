import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommonHeader from '../components/CommonHeader';


class Header extends Component {
	shouldComponentUpdate(){
		console.log(1111);
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
		userName: state.userName
	};
}

export default connect(mapStateToProps, null)(Header);