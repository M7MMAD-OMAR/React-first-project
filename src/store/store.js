import {createStore} from "redux";
import {rootReduce} from "../reducer/rootReduce";

export const storeCounter = createStore(rootReduce);