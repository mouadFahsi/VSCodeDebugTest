import { combineReducers } from "redux";
import {
  applicationReducer,
  ApplicationReducerState
} from "./application.store";

export interface IReducerState {
  applicationReducer: ApplicationReducerState;
}

export default combineReducers<IReducerState>({
  applicationReducer
});
