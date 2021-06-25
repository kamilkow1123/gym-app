import React from 'react';
import Homepage from './components/Homepage';
import Login from './components/Login';
import UserPage from './components/UserPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Homepage} />
					<Route path="/trainer" exact component={Login} />
					<Route path="/employee" exact component={Login} />
					<Route path="/client" exact component={Login} />
					<PrivateRoute path="/user" exact component={UserPage} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
