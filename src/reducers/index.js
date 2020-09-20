import { combineReducers } from "@reduxjs/toolkit";
import toDoReducer from "./toDoReducer";

const rootReducer = combineReducers({
  toDo: toDoReducer,
});

export default rootReducer;
