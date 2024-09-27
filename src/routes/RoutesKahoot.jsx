import { BrowserRouter, Route ,Routes} from "react-router-dom";
import LayoutAdmin from "../pages/LayoutAdmin/LayoutAdmin";
import LayoutClient from "../pages/LayoutClient/LayoutClient";
import CreacteTest from "../pages/CreateTest/CreacteTest";
import StartGame from "../pages/StartGame/StartGame";

const Routekahoot = () => {
    return (
        <>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<LayoutAdmin/>}/>
        <Route path="/create" element={<CreacteTest/>}/>
        <Route path='/game/:codigo' element={<LayoutClient/>}/>
        <Route path='/game/:codigo/start' element={<StartGame/>}/>
        </Routes>
        </BrowserRouter>
        </>
    );
}

export default Routekahoot;