import {
	USER_LOADED,
	USER_LOADING,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_SUCCESS,
	REGISTER_SUCCESS,
	REGISTER_FAIL
} from './types';
import resultsAPI from '../apis/resultsAPI';

//check token & load user
export const loadUser = () => (dispatch, getState) => {
	//User Loading
	dispatch({ type: USER_LOADING });

	resultsAPI
		.get('auth/users/me/', tokenConfig(getState))
		.then((res) => {
			dispatch({
				type    : USER_LOADED,
				payload : res.data
			});
		})
		.catch((err) => {
			console.log(err);
			dispatch({
				type : AUTH_ERROR
			});
		});
};

//login user
export const login = (email, password) => (dispatch) => {
	//headers
	const config = {
		headers : {
			'Content-Type' : 'application/json'
		}
	};

	//Request body
	const body = JSON.stringify({ email, password });

	resultsAPI
		.post('auth/token/login/', body, config)
		.then((res) => {
			dispatch({
				type    : LOGIN_SUCCESS,
				payload : res.data
			});
		})
		.catch((err) => {
			console.log(err);
			dispatch({
				type : LOGIN_FAIL
			});
		});
};

//register user
export const register = (details) => (dispatch) => {
	//headers
	const config = {
		headers : {
			'Content-Type' : 'application/json'
		}
	};

	//Request body
	const body = JSON.stringify(details);
	// console.log(body);

	resultsAPI
		.post('auth/users/', body, config)
		.then((res) => {
			dispatch({
				type : REGISTER_SUCCESS
			});
		})
		.catch((err) => {
			console.log(err.response.data);
			dispatch({
				type    : REGISTER_FAIL,
				payload : err.response.data
			});
		});
};

// LOGOUT
export const logout = () => (dispatch, getState) => {
	resultsAPI
		.post('auth/token/logout/', null, tokenConfig(getState))
		.then((res) => {
			dispatch({
				type : LOGOUT_SUCCESS
			});
		})
		.catch((err) => {
			console.log(err);
		});
};

//setup config with token - helper function
export const tokenConfig = (getState) => {
	//get token from state
	const token = getState().auth.auth_token;

	//headers
	const config = {
		headers : {
			'Content-Type' : 'application/json'
		}
	};

	//if token, add to headers config
	if (token) {
		config.headers['Authorization'] = `Token ${token}`;
	}

	return config;
};
