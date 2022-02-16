import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import TodoDynamic from "./pages/TodoDynamic";

const App = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/home"} element={<Home/>}/>
            <Route path={"/todo/:id"} element={<TodoDynamic/>}/>
        </Routes>
    );
}

export default App;
