import {useEffect, useState} from "react";
import {Actions} from "./build/Actions";
import axios from "axios";

const Content = () => {
    const [state, setState] = useState([]);

    // const get_data = async () => {
    //     await fetch('https://jsonplaceholder.typicode.com/todos', {
    //         method: "GET"
    //     })
    //         .then(res => res.json())
    //         .then(data => setState(data));
    // }

    const get_data = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos')

        setState(res.data)
    }


    useEffect(() => {
        get_data();

    }, []);


    return (
        <>
            <div className="container-fluid flex flex-row flex-wrap space-x-16 space-y-5">
                {
                    state.map((item, index) => {
                        return (

                            <article className="first:ml-16 first:mt-5">
                                <Actions key={index} title={item.title} body={item.title}/>
                            </article>

                        )
                    })
                }
            </div>
        </>
    );
}

export default Content;