import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGOUT_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
	isAuthenticated : null,
	isLoading       : false,
	user            : null,
	error           : ''
};

export default (state = INITIAL_STATE, action) => {
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
		case AUTH_ERROR:
			return {
				...state,
				//token: null,
				user            : null,
				isAuthenticated : false,
				isLoading       : false,
				error           : 'Details do not match!'
			};
		case LOGOUT_SUCCESS:
			//localStorage.removeItem('token); ???
			return {
				...state,
				//token: null,
				user            : null,
				isAuthenticated : false,
				isLoading       : false,
				error           : ''
			};
		default:
			return state;
	}
};
