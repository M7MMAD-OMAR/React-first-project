import {createStore} from "redux";
import {reducerCounter} from "../reducer/reducerCounter";

export const storeCounter = createStore(reducerCounter);