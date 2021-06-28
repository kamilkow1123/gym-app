import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginForm({ Login, error }) {
	const [ details, setDetails ] = useState({ email: '', password: '' });

	const submitHandler = (e) => {
		e.preventDefault();

		Login(details);
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="form-inner">
				<h2>Login</h2>
				{error !== '' ? <div className="error-login">{error}</div> : ''}
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
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						name="password"
						id="password"
						onChange={(e) => setDetails({ ...details, password: e.target.value })}
						value={details.password}
					/>
				</div>
				<input type="submit" value="LOGIN" className="submit-button" />
				<p>
					Don't have an account?
					<Link className="register-button" to="/register">
						Register
					</Link>
				</p>
			</div>
		</form>
	);
}

export default LoginForm;
