import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import Card from "./Card";
import {useState} from "react";


const Home = () => {
    const values = [{
        title: 'First Title',
        img: img1,
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet distinctio illo, minus reiciendis repellat rerum"
    }, {
        title: 'Second Title',
        img: img2,
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet distinctio illo, minus reiciendis repellat rerum"
    }, {
        title: 'Third Title',
        img: img3,
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet distinctio illo, minus reiciendis repellat rerum"
    },];
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users') || '[]'))


    // Clear all input from home page
    const clear_input = () => {
        setFirst_name('');
        setLast_name('');
    }


    // print add data from users array in home page
    const print_data = () => {
        let temp = {
            first_name: first_name,
            last_name: last_name,
        }
        users.push(temp)
        setUsers(users);
        localStorage.setItem('users', JSON.stringify(users));
        clear_input();
    }


    return (<>

        {/* input text */}
        <div className='container'>
            <label htmlFor="first_name">
                <input type="text" placeholder='First Name' name='first_name' id='first_name'
                       value={first_name} onChange={(e) => {
                    setFirst_name(e.target.value)
                }}/>
            </label>
            <br/>
            <br/>
            <label htmlFor="last_name">
                <input type="text" placeholder='Last Name' name='last_name' id='last_name'
                       value={last_name} onChange={(e) => {
                    setLast_name(e.target.value)
                }}/>
            </label>
            <br/><br/>
            <button onClick={print_data}>Submit</button>
            <br/><br/>
            <button onClick={clear_input}>Clear</button>
        </div>


        {/* Show Data in table*/}
        <table>
            <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>last Name</th>
            </tr>
            </thead>

            <tbody>
            {users.map((item, key) => {
                return <tr key={key}>
                    <td>{key}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                </tr>
            })}
            </tbody>
        </table>


        {/* show all cards start */}
        <div className="flex flex-row  my-6 flex-wrap">
            {values.length ? (values.map((item, index) => {
                return <Card key={index} title={item.title} img={item.img} body={item.body}/>;
            })) : (<h1>Don't have any data</h1>)}
        </div>
        {/* show all cards end */}
    </>);
}

export {Home};