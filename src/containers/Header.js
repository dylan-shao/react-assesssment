import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommonHeader from '../components/CommonHeader';


class Header extends Component {
	constructor(props){
		super(props);
		this.state = {
			headerMessage: 'Welcome'
		};
	}
	componentDidMount(){
		console.log('did mount');
	}
	componentWillReceiveProps() {
		console.log(333);
	}
	shouldComponentUpdate(){
		console.log(1111);
		return true;
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