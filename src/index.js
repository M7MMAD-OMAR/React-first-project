import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Users} from "./components/context/Users";
import {Provider} from "react-redux";
import {storeCounter} from "./store/store";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={storeCounter}>
                <Users>
                    <App/>
                </Users>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
