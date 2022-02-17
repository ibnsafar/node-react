import {configureStore} from "@reduxjs/toolkit";
import articleReducer from "./reducers/articleReducer";

export default configureStore({
    reducer: {
        articleReducer
    }
})