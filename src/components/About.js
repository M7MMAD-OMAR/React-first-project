import {useReducer} from "react";
import ChangeNumber from "./reducers/ChangeNumber";

const About = () => {
    const numbers = {
        counter: 0,
    }
    const [counter_state, counter_dispatch] = useReducer(ChangeNumber, numbers);

    return (
        <div className="min-h-screen">
            <button className="btn btn-circle" onClick={() => {
                counter_dispatch({type: '+'})
            }}>
                <p>+</p>
            </button>

            <button className="btn btn-circle" onClick={() => {
                counter_dispatch({type: '-'})
            }}>
                <p>-</p>
            </button>

            <button className="btn btn-circle w-fit p-3" onClick={() => {
                counter_dispatch({type: '0'})
            }}>
                <p>Clear</p>
            </button>

            <br/><br/>
            <button className="btn btn-circle">
                <p>{counter_state.counter}</p>
            </button>
        </div>
    );
}

export default About;