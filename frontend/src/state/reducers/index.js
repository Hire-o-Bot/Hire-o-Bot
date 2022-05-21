import { combineReducers } from "redux";
import auth from "./auth";
import company from "./companyProfile";
import jobs from "./jobs";

const rootReducer = combineReducers({
  auth,
  company,
  jobs,
});

export default rootReducer;
