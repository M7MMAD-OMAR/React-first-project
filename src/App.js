import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header.js";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Content from "./components/Content";
import About from "./components/About";
import Error_404 from "./components/errors/Error_404";


const App = () => {

    return (
        <div>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route index   element={Main}/>
                    <Route path="about" element={About}/>
                    <Route path="content" element={Content}/>
                    <Route path="*" element={Error_404}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>
    );
}

export default App;