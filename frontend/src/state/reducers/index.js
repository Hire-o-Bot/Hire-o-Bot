import { combineReducers } from "redux";
import auth from "./auth";
import company from "./companyProfile";
import candidate from "./candidateProfile";
import jobs from "./jobs";
const rootReducer = combineReducers({
  auth,
  company,
  candidate,
  jobs
});

export default rootReducer;
