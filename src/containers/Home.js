import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router'
import  { connect } from 'react-redux';
import { getUserName } from '../store/actions';

class Home extends Component {

	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.getUserName(e.target.username.value);
		this.props.history.push('/assessment');
	}

	render(){
		return (
			<div className="home">
				<h2>Please login to continue</h2>
				<form className="input-group" onSubmit={(e)=>this.onFormSubmit(e)}>
					<input 
						name="username"
						placeholder="Input your name to get started"
						className="form-control"
					/>
					<span>
						<button type="submit" className="btn">Submit</button>
					</span>
				</form>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({getUserName}, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(Home));