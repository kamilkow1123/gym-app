import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGOUT_SUCCESS } from './types';

const adminUser = {
	email    : 'admin@admin.com',
	password : 'admin'
};

export const loadUser = (details) => (dispatch) => {
	//User Loading
	dispatch({ type: USER_LOADING });

	//TODO: axios to api, check token

	if (details.email === adminUser.email && details.password === adminUser.password) {
		dispatch({
			type    : USER_LOADED,
			payload : { details }
		});
	} else {
		dispatch({
			type : AUTH_ERROR
		});
	}
};

// LOGOUT
export const logout = () => (dispatch) => {
	//TODO: axios to api, check token

	dispatch({
		type : LOGOUT_SUCCESS
	});
};
