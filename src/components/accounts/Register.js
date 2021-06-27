import React, { useState, useEffect } from 'react';
import RegisterForm from './RegisterForm';
import { Link, Redirect } from 'react-router-dom';
import '../../style/login.css';
import { register } from '../../actions/auth';
import { connect } from 'react-redux';

const Register = (props) => {
	const [ errors, setErrors ] = useState({});

	useEffect(
		() => {
			if (props.error !== '') {
				let tempErrors = {};

				for (let newError in props.error) {
					if (newError === 're_password') tempErrors[newError] = `Password is required`;
					else tempErrors[newError] = `${newError[0].toUpperCase() + newError.slice(1)} is required`;
				}
				setErrors(tempErrors);
			}
		},
		[ props.error ]
	);

	const Register = (details) => {
		props.register(details);
	};

	return (
		<div>
			{!props.isAuthenticated ? (
				<div className="login">
					<Link to="/" className="back-button">{`< back`}</Link>
					<RegisterForm Register={Register} errors={errors} />
				</div>
			) : (
				<Redirect to="/login" />
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

export default connect(mapStateToProps, { register })(Register);
