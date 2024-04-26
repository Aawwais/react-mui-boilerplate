const initialState = {
  user: null,
  uid: null,
  counter: 0,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      console.log("hello");
      return {
        ...state,
        counter: action.payload,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: action.payload,
      };
    case "LOGIN":
      return {
        ...state,
        user: payload,
        uid: payload.id,
      };
    case "LOGOUT":
      localStorage.removeItem("auth");
      return {
        ...state,
        user: null,
        uid: null,
      };
    default:
      return {
        ...state,
      };
  }
}
