import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Content from "./components/Content";
import About from "./components/About";
import Error_404 from "./components/errors/Error_404";
import Header from "./components/Header";


const App = () => {

    return (
        <div>
            <Header/>
            <Router>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="content" element={<Content/>}/>
                    <Route path="*" element={<Error_404/>}/>
                </Routes>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;