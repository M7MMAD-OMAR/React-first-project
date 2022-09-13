import Header from "./components/Header.js";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Content from "./components/Content";
import About from "./components/About";



const App = () => {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/content" element={<Content/>}/>
                </Routes>
            </BrowserRouter>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;