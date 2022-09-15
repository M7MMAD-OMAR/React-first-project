import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Users} from "./components/context/Users";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Users>
                <App/>
            </Users>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
