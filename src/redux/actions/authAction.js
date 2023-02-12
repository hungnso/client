export const loginGoogle = (user, token) => async (dispatch) => {
  dispatch({
    type: "LOGGED_IN_USER",
    payload: { ...user, token },
  });
};
export const refreshToken = (user, token) => async (dispatch) => {
  dispatch({
    type: "LOGGED_IN_USER",
    payload: { ...user, token },
  });
};
export const logoutUser = (data) => async (dispatch) => {
  console.log(data)
  dispatch({
    type: "LOGGED_IN_USER",
    payload: data,
  });
};
