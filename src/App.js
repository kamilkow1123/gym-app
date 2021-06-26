import React, { useEffect } from 'react';
import Homepage from './components/Homepage';
import Login from './components/accounts/Login';
import Register from './components/accounts/Register';
import UserPage from './components/UserPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { loadUser } from './actions/auth';
import { connect } from 'react-redux';

const App = (props) => {
	useEffect(() => {
		props.loadUser();
	});

	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Homepage} />
					{/* <Route path="/trainer" exact component={Login} />
					<Route path="/employee" exact component={Login} /> */}
					<Route path="/login" exact component={Login} />
					<Route path="/register" exact component={Register} />
					<PrivateRoute path="/user" exact component={UserPage} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default connect(null, { loadUser })(App);
