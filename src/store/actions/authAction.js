export const login = () => async (dispatch) => {
  dispatch({
    type: "LOGIN",
    payload: { id: 123, first_name: "abc", last_name: "def" },
  });
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: "LOGOUT",
  });
};

export const increment = (data) => async (dispatch) => {
  dispatch({
    type: "INCREMENT",
    payload: data,
  });
};
export const decrement = (data) => async (dispatch) => {
  dispatch({
    type: "DECREMENT",
    payload: data,
  });
};
