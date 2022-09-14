import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import Card from "./Card";
import {createContext, useContext, useEffect, useRef, useState} from "react";
import {UsersList} from "./context/Users";


const Home = () => {
    const values = [
        {
            title: 'First Title',
            img: img1,
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet distinctio illo, minus reiciendis repellat rerum"
        },
        {
            title: 'Second Title',
            img: img2,
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet distinctio illo, minus reiciendis repellat rerum"
        },
        {
            title: 'Third Title',
            img: img3,
            body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet distinctio illo, minus reiciendis repellat rerum"
        },
    ];
    const {users, add_users} = useContext(UsersList);
    let first_name = useRef(null);
    let last_name = useRef(null);


    const print_data = () => {
        if (first_name.current.value.length && last_name.current.value.length) {
            console.log(first_name.current.value);
            console.log(last_name.current.value);
            add_users(first_name.current.value)

        } else {
            console.log('fuck you')
        }
    }

    const clear_data = () => {
        first_name.current.value = null;
        last_name.current.value = null;
    }



    return (
        <>
            {users}
            <div className='container'>
                <label htmlFor="first_name">
                    <input type="text" placeholder='First Name' name='first_name' id='first_name' ref={first_name}/>
                </label>
                <br/>
                <br/>
                <label htmlFor="last_name">
                    <input type="text" placeholder='Last Name' name='last_name' id='last_name' ref={last_name}/>
                </label>
                <br/><br/>
                <button value='Submit' onClick={print_data}>Submit</button>
                <br/><br/>
                <button value='Clear' onClick={clear_data}>Clear</button>
            </div>

            {/* show all cards start */}
            <div className="flex flex-row  my-6 flex-wrap">
                {
                    values.length ?
                        (
                            values.map((item, index) => {
                                return <Card key={index} title={item.title} img={item.img} body={item.body}/>;
                            })
                        ) :
                        (
                            <h1>Don't have any data</h1>
                        )
                }
            </div>
            {/* show all cards end */}
        </>
    );
}

export {Home};