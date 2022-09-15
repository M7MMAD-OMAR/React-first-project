import logo from './logo.svg';
import './App.css';
import {Actions} from "./components/build/Actions";

function App() {
    return (
        <>
            <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
            <div className="h-14 bg-gradient-to-r from-sky-500 to-indigo-500"></div>
            <div className="h-14 bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
            <div className="h-14 bg-gradient-to-r from-purple-500 to-pink-500"></div>
            <div className="tabs tabs-boxed">
                <a className="tab tab-active" >Tab 1</a>
                <a className="tab">Tab 2</a>
                <a className="tab">Tab 3</a>
            </div>

            <div className="container flex flex-row">
                <Actions title='title' body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi blanditiis corporis, delectus deleniti
    distinctio dolore earum, et excepturi harum nulla perferendis quae quaerat, quas qui repellat tempora unde vel.'/>
                <Actions title='title' body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi blanditiis corporis, delectus deleniti
    distinctio dolore earum, et excepturi harum nulla perferendis quae quaerat, quas qui repellat tempora unde vel.'/>
                <Actions title='title' body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi blanditiis corporis, delectus deleniti
    distinctio dolore earum, et excepturi harum nulla perferendis quae quaerat, quas qui repellat tempora unde vel.'/>
            </div>

        </>
    );
}

export default App;
