import {DECREMENT, INCREMENT} from "../publicParameters/parameters";


export const reducerCounter = (state = {counter: 0}, action)=>{
    switch (action.type) {
        case INCREMENT:
            return {counter: state.counter + 1}
        case DECREMENT:
            return {counter: state.counter - 1}
        default:
            return {counter: state.counter = 0}
    }
}