import {createStore} from "redux";
import {reducerCounter} from "../reducer/reducerCounter";

export const store = createStore(reducerCounter);