import { GLOBALTYPES } from "../actions/globalTypes";



export const authReducer = (state, action) => {
  console.log(action.payload);
  switch (action.type) {
    case "LOGGED_IN_USER":
      return action.payload;
    case "LOGOUT":
      return action.payload;
    default:
      return null;
  }
};
