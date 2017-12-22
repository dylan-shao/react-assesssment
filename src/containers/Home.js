import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import  { connect } from 'react-redux';
import { saveUser } from '../actions/index';

class Home extends Component {

	onFormSubmit(event){
		event.preventDefault();
		this.props.saveUser(event.target.username.value);
		<Redirect to="/assessment"/>
	}

	render(){
		return (
			<div className="home">
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
	return bindActionCreators({saveUser}, dispatch);
}

export default connect(null, mapDispatchToProps)(Home);