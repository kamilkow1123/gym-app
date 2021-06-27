import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RegisterForm({ Register, errors }) {
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
		Register(details);
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="form-inner">
				<h2>Register</h2>
				{/* {error !== '' ? <div className="error">{error}</div> : ''} */}
				<div className="form-group">
					<label htmlFor="username">Username:</label>
					<input
						type="text"
						name="username"
						id="username"
						onChange={(e) => setDetails({ ...details, username: e.target.value })}
						value={details.username}
					/>
					{errors.username && <p>{errors.username}</p>}
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
					{errors.email && <p>{errors.email}</p>}
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
					{errors.first_name && <p>{errors.first_name}</p>}
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
					{errors.last_name && <p>{errors.last_name}</p>}
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
					{errors.phone && <p>{errors.phone}</p>}
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
					{errors.password && <p>{errors.password}</p>}
				</div>
				<div className="form-group">
					<label htmlFor="re_password">Confirm Password:</label>
					<input
						type="password"
						name="re_password"
						id="re_password"
						onChange={(e) => setDetails({ ...details, re_password: e.target.value })}
						value={details.re_password}
					/>
					{errors.re_password && <p>{errors.re_password}</p>}
				</div>
				<input type="submit" value="REGISTER" className="submit-button" />
				<p>
					Already have an account?
					<Link className="register-button" to="/login">
						Login
					</Link>
				</p>
			</div>
		</form>
	);
}

export default RegisterForm;
