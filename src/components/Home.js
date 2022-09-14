import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import Card from "./Card";
import {useState} from "react";

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

    const users = [];
    const [first_name, set_first_name] = useState('');
    const [last_name, set_last_name] = useState('');

    const content_string = (e) => {
        if (e.target.id === 'first_name') {
            set_first_name(e.target.value)
        } else if (e.target.id === 'last_name') {
            set_last_name(e.target.value);
        }
    }

    const add_item = () => {
        users.push({
            'first_name': first_name,
            'last_name': last_name,
        });
        users.map((e) => {
            console.log(e.first_name + ' ' + e.last_name)
        });

    }


    return (
        <div>
            <div className='container'>
                <label htmlFor="first_name">
                    <input type="text" placeholder='First Name' name='first_name' id='first_name'
                           onChange={content_string}/>
                </label>
                <br/>
                <br/>
                <label htmlFor="last_name">
                    <input type="text" placeholder='Last Name' name='last_name' id='last_name'
                           onChange={content_string}/>
                </label>
                <br/><br/>
                <button value='Submit' onClick={add_item}>Submit</button>
            </div>

            {/* show all cards start */}
            <div className="flex flex-row  my-6 flex-wrap">
                {
                    values.length ?
                        (
                            values.map((item) => {
                                return <Card title={item.title} img={item.img} body={item.body}/>;
                            })
                        ) :
                        (
                            <h1>Don't have any data</h1>
                        )
                }
            </div>
            {/* show all cards end */}

        </div>
    );
}

export default Home;