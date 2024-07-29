import { combineReducers } from "redux";
import tabSlice from "./TabsSlice";



const rootReducer = combineReducers({
  tabSlice,
});

export default rootReducer;
