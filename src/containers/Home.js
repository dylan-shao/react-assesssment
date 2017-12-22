import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
	render(){
		return (
			<div className="home">
				<Link className="btn btn-primary" to="/">Back to Index</Link>
			</div>
		);
	}
}

export default Home;