import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import  { connect } from 'react-redux';
import { saveUser } from '../actions/index';

class Home extends Component {

	constructor(props) {
		super(props);

	}

	onFormSubmit(event){
		event.preventDefault();
		this.props.saveUser(event.target.username.value);
	}

	render(){
		return (
			<div className="home">
				<form className="input-group" onSubmit={(e)=>this.onFormSubmit(e)}>
					<input 
						name="username"
						placeholder="Input your name to get started"
						className="form-control"
						onChange={this.props.saveUser} 
					/>
					<span className="input-group-btn">
						<button type="submit" className="btn btn-secondary">Submit</button>
					</span>
				</form>
				<Link className="btn" to="/">Back to Index</Link>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({saveUser}, dispatch);
}

export default connect(null, mapDispatchToProps)(Home);