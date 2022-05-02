import { combineReducers } from "redux";
import auth from "./auth";
import company from "./companyProfile";
const rootReducer = combineReducers({
  auth,
  company,
});

export default rootReducer;
