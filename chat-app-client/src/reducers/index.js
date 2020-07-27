import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import getUserReducer from "./getUserReducer";
import logoutReducer from "./logoutReducer";
import publicContentReducer from "./publicContentReducer";
import userBoardReducer from "./userBoardReducer";
import moderatorBoardReducer from "./moderatorBoardReducer";
import adminBoardReducer from "./adminBoardReducer";
import signupReducer from "./signupReducer";

export default combineReducers({
    form: formReducer,
    auth: authReducer,
    signup:signupReducer,
    user: getUserReducer,
    logout: logoutReducer,
    publicContent: publicContentReducer,
    userBoard: userBoardReducer,
    modBoard: moderatorBoardReducer,
    adminBoard: adminBoardReducer,
});