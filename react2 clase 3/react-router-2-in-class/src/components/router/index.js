import { Route,Routes } from "react-router-dom";

import Home from "../home";
import Contacto from "../Contacto";

export default () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/form" element={<Contacto/>}/>
        </Routes>
    )
}