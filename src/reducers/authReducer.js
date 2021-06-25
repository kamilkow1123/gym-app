import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
	auth_token      : localStorage.getItem('auth_token'),
	isAuthenticated : null,
	isLoading       : false,
	user            : null,
	error           : ''
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case USER_LOADING:
			return {
				...state,
				isLoading : true
			};
		case USER_LOADED:
			return {
				...state,
				isAuthenticated : true,
				isLoading       : false,
				user            : action.payload,
				error           : ''
			};
		case LOGIN_SUCCESS:
			localStorage.setItem('auth_token', action.payload.auth_token);
			return {
				...state,
				...action.payload,
				isAuthenticated : true,
				isLoading       : false,
				error           : ''
			};
		case AUTH_ERROR:
			localStorage.removeItem('auth_token');
			return {
				...state,
				auth_token      : null,
				user            : null,
				isAuthenticated : false,
				isLoading       : false,
				error           : ''
			};
		case LOGIN_FAIL:
			localStorage.removeItem('auth_token');
			return {
				...state,
				auth_token      : null,
				user            : null,
				isAuthenticated : false,
				isLoading       : false,
				error           : 'Details do not match!'
			};
		case LOGOUT_SUCCESS:
			localStorage.removeItem('auth_token');
			return {
				...state,
				auth_token      : null,
				user            : null,
				isAuthenticated : false,
				isLoading       : false,
				error           : ''
			};
		default:
			return state;
	}
}