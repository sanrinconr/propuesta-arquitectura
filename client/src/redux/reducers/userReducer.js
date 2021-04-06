import { ADD_NAME } from "../actions/userActions";

const initialState = [{name:"juan"},{name:"pedro"},{name:"carlos"}]
  
  export const userReducer = (state=initialState, action) => {
    switch (action.type) {
      case ADD_NAME:
        return [
          ...state,
          ...action.payload
        ];
      default:
        return state;
    }
  };
  