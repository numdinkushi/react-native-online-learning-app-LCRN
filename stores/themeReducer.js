import * as themeActionTypes from "./themeAction";
import { selectedTheme } from "../constants";

const initialState = {
    appTheme: selectedTheme,
    error: null,
}

 const themeReducer = (state=initialState, action) => {
    // switch (action.type) {
//   case themeActionTypes.TOGGLE_THEME_BEGIN:
//     return {
//       ...state,
//       error: null,
//     }
//     break;
// case themeActionTypes.TOGGLE_THEME_SUCCESS:
//   return {
//     ...state,
//     appTheme: action.payload.selectedTheme
//   }
//   break;
//   case themeActionTypes.TOGGLE_THEME_FAILURE:
//   return {
//     ...state,
//     error: action.payload.error
//   }
//   default:
//     return state;
// }

  switch (action.type) {
    case themeActionTypes.TOGGLE_THEME_BEGIN:
      return {
        ...state,
        error: null,
      };  
    case themeActionTypes.TOGGLE_THEME_SUCCESS:
      return {
        ...state,
        appTheme: action.payload.selectedTheme,
      };

    case themeActionTypes.TOGGLE_THEME_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}

export default themeReducer;