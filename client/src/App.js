import {Route, Routes} from "react-router-dom";
import Articles from "./pages/Articles";
import Article from "./pages/Article";

const App = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Articles/>}/>
            <Route path={"/articles"} element={<Articles/>}/>
            <Route path={"/article/:id"} element={<Article/>}/>
        </Routes>
    );
}

export default App;
