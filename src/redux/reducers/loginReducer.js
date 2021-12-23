
import { types } from "../types/types";

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
      case types.login:
        return {
          email: action.payload.email,
          password:action.payload.password,
          logged: true,
        };
         case types.logout:
         return {
          logged: false,
        }
        default:
          return state;
       
    }
  };