import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import { Link, Redirect } from 'react-router-dom';
import '../style/login.css';
import { loadUser } from '../actions/auth';
import { connect } from 'react-redux';
import store from '../index';

const Login = (props) => {
	// const [ user, setUser ] = useState({ name: '', email: '' });
	const [ error, setError ] = useState('');

	useEffect(
		() => {
			if (props.error != '') {
				setError('Details do not match!');
			}
		},
		[ props.error ]
	);

	const Login = (details) => {
		store.dispatch(loadUser(details));
	};

	return (
		<div>
			{!props.isAuthenticated ? (
				<div className="login">
					<Link to="/" className="back-button">{`< back`}</Link>
					<LoginForm Login={Login} error={error} />
				</div>
			) : (
				<Redirect to="/user" />
			)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		isAuthenticated : state.auth.isAuthenticated,
		error           : state.auth.error
	};
};

export default connect(mapStateToProps)(Login);
