import React, { useState, useEffect } from 'react';
import RegisterForm from './RegisterForm';
import { Link, Redirect } from 'react-router-dom';
import '../../style/login.css';
import { register } from '../../actions/auth';
import { connect } from 'react-redux';

const Register = (props) => {
	const [ error, setError ] = useState([]);

	useEffect(
		() => {
			if (props.error !== '') {
				// console.log(props.error);
				// setError(props.error);
				setError(props.error[Object.keys(props.error)[0]]);
				// for (let newError in props.error) {
				// 	console.log(newError);
				// 	setError([ ...error, newError ]);
				// }
				// console.log(error);
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
					<RegisterForm Register={Register} error={error} />
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
