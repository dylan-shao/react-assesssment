import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommonHeader from '../components/CommonHeader';

/**
 * this can be just a stateless component,
 * using a container component here is easy to add 
 * more features to Header component
 **/
class Header extends Component {
	constructor(props){
		super(props);
		this.state = {
			headerMessage: 'Welcome'
		};
	}

	render() {
		return (
			<CommonHeader headerMessage={this.state.headerMessage} userName={this.props.userName}/>
		);
	}
}

function mapStateToProps({ header }) {
	return {
		userName: header.userName
	};
}

export default connect(mapStateToProps)(Header);