import appReducer from "./appReducer";
import newsReducer from "./newsReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  news: newsReducer,
});

export default rootReducer;
