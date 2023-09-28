import { Action, State } from "@/interface";

const actionTypes = {
  SET_USER: "SET_USER",
  LOGOUT: "LOGOUT",
  UPDATE_USER: "UPDATE_USER",
  SWITCH_USER: "SWITCH_USER",
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        user: null,
      };
    case actionTypes.UPDATE_USER:
      return {
        ...state,
        user: action.payload
      }
    case actionTypes.SWITCH_USER:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
};

export default reducer;
