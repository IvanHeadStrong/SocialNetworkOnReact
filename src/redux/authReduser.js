import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
	userId: 0,
	email: '',
	login: '',
	isAuth: false,
};

const authReduser = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.data,
				isAuth: true,
			};
		default:
			return state;
	}
};

export default authReduser;

const setAuthUserData = (userId, email, login) => ({
	type: SET_USER_DATA,
	data: { userId, email, login },
});

export const getAuthUserData = () => (dispatch) =>
	authAPI.getAuthUserData().then((data) => {
		console.log(data);
		
		if (data.resultCode === 0) {
			let { id, login, email } = data.data;
			dispatch(setAuthUserData(id, email, login));
			return id;
		} else {
			return false;
		}
	});

export const authorize = (authData) => {
	return (dispatch) => {
		authAPI.authorize(authData).then((data) => {
			if (data.resultCode === 0) {
				dispatch(getAuthUserData());
			} else {
				console.log('error');
			}
		});
	};
};
