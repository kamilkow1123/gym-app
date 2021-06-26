import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RegisterForm({ Register, error }) {
	const [ details, setDetails ] = useState({
		username    : '',
		email       : '',
		first_name  : '',
		last_name   : '',
		phone       : '',
		password    : '',
		re_password : ''
	});

	const submitHandler = (e) => {
		e.preventDefault();
		// if (details.password !== details.re_password) {
		// 	setError('Passwords do not match!');
		// } else if (
		// 	details.username === '' ||
		// 	details.first_name === '' ||
		// 	details.last_name === '' ||
		// 	details.phone === '' ||
		// 	details.email === '' ||
		// 	details.password === '' ||
		// 	details.re_password === ''
		// ) {
		// 	setError('Fields cannot be empty!');
		// } else {
		// 	Register(details);
		// }
		Register(details);
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="form-inner">
				<h2>Register</h2>
				{error !== '' ? <div className="error">{error}</div> : ''}
				<div className="form-group">
					<label htmlFor="username">Username:</label>
					<input
						type="text"
						name="username"
						id="username"
						onChange={(e) => setDetails({ ...details, username: e.target.value })}
						value={details.username}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						name="email"
						id="email"
						onChange={(e) => setDetails({ ...details, email: e.target.value })}
						value={details.email}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="first_name">First Name:</label>
					<input
						type="text"
						name="first_name"
						id="first_name"
						onChange={(e) => setDetails({ ...details, first_name: e.target.value })}
						value={details.first_name}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="last_name">Last Name:</label>
					<input
						type="text"
						name="last_name"
						id="last_name"
						onChange={(e) => setDetails({ ...details, last_name: e.target.value })}
						value={details.last_name}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="phone">Phone number:</label>
					<input
						type="tel"
						name="phone"
						id="phone"
						onChange={(e) => setDetails({ ...details, phone: e.target.value })}
						value={details.phone}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						name="password"
						id="password"
						onChange={(e) => setDetails({ ...details, password: e.target.value })}
						value={details.password}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Confirm Password:</label>
					<input
						type="password"
						name="re_password"
						id="re_password"
						onChange={(e) => setDetails({ ...details, re_password: e.target.value })}
						value={details.re_password}
					/>
				</div>
				<input type="submit" value="REGISTER" className="submit-button" />
				<p>
					Already have an account?
					<Link className="register-button" to="/client">
						Login
					</Link>
				</p>
			</div>
		</form>
	);
}

export default RegisterForm;
