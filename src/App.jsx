import {useState} from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import {Counter} from "./components/counter.jsx";
import {Converter} from "./components/converter.jsx";
import {Products} from "./components/products.jsx";
import MyForm from "./components/myForm.jsx";
import ApiData from "./components/fetchdata.jsx";
import {BrowserRouter, Route, Routes} from "react-router";
import About from "./pages/About.jsx";
import NotFound from "./pages/Notfound.jsx";
import Home from "./pages/home.jsx";
import Services from "./pages/Services.jsx";
import Navbar from "./components/navbar.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <BrowserRouter >
                <Navbar></Navbar>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="About" element={<About/>}/>
                    <Route path="Services" element={<Services/>}/>
                    <Route path="*" element={<NotFound />}/>

                </Routes>
            </BrowserRouter>
            {/*<Counter></Counter>*/}
            {/*<Counter></Counter>*/}
            <MyForm></MyForm>
            {/*<Products></Products>*/}
            {/*<Counter></Counter>*/}
            {/*<Converter></Converter>*/}
            <ApiData></ApiData>
        </>


    )
}

export default App
