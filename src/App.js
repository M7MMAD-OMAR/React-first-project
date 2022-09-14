import {Route, Routes} from "react-router-dom";
import {Home, Users} from "./components/Home";
import Footer from "./components/Footer";
import Content from "./components/Content";
import About from "./components/About";
import Error_404 from "./components/errors/Error_404";
import Header from "./components/Header";
import {useContext} from "react";


const App = () => {
    const temp = useContext(Users);
    return (
        <>
            <Header/>
            {temp}

            <Routes>
                    <Route index element={<Header/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="content" element={<Content/>}/>
                    <Route path="*" element={<Error_404/>}/>
                </Routes>
            <Footer/>
        </>
    );
}

export default App;