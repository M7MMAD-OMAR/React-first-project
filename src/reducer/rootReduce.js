import {reducerCounter} from "./reducerCounter";
import {combineReducers} from "redux";


export const rootReduce = combineReducers({
	Counter: reducerCounter,

})