export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}

export function login() {
  return async (dispatch) => {
    dispatch({ type: LOGIN });
    try {
      return dispatch(loginSuccess());
    } catch (e) {
      return dispatch(loginError(e));
    }
  };
}
