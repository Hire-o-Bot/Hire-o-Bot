import { combineReducers } from "redux";
import auth from "./auth";
import company from "./companyProfile";
import candidate from "./candidateProfile";
const rootReducer = combineReducers({
  auth,
  company,
  candidate,
});

export default rootReducer;
