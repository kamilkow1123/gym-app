import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS } from './types';
import resultsAPI from '../apis/resultsAPI';

//check token & load user
export const loadUser = () => (dispatch, getState) => {
	//User Loading
	dispatch({ type: USER_LOADING });

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

	resultsAPI
		.get('auth/users/me/', config)
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

// LOGOUT
export const logout = () => (dispatch) => {
	//TODO: axios to api, check token

	dispatch({
		type : LOGOUT_SUCCESS
	});
};
