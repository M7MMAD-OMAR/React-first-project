import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import Card from "./Card";
import {createContext, useContext, useEffect, useMemo, useRef, useState} from "react";
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
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');

    // temps = JSON.parse(localStorage.getItem('temps') || '[]')
    let [temps, setTemps] = useState(JSON.parse(localStorage.getItem('temps') || '[]'));
    const print_data = () => {
        let temp = {
            first_name: first_name,
            last_name: last_name,
        }
        temps.push(temp)
        setTemps(temp);
        localStorage.setItem('temps', JSON.stringify(temps));
        console.log(temps.length)


    }


    return (
        <>
            <table>
                <tr>
                    <td>#</td>
                    <td>First Name</td>
                    <td>last Name</td>
                </tr>
                {temps.map((item, key) => {
                    return <tr key={key}>
                        <td>{key}</td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                    </tr>
                })}
            </table>

            <div className='container'>
                <label htmlFor="first_name">
                    <input type="text" placeholder='First Name' name='first_name' id='first_name'
                           onChange={(e) => {
                               setFirst_name(e.target.value)
                           }}/>
                </label>
                <br/>
                <br/>
                <label htmlFor="last_name">
                    <input type="text" placeholder='Last Name' name='last_name' id='last_name'
                           onChange={(e) => {
                               setLast_name(e.target.value)
                           }}/>
                </label>
                <br/><br/>
                <button value='Submit' onClick={print_data}>Submit</button>
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