


export const reducerCounter = (state = {counter: 0}, action)=>{
    switch (action.type) {
        case '+':
            return {counter: state.counter + 1}
        case '-':
            return {counter: state.counter - 1}
        default:
            return {counter: state.counter = 0}
    }
}