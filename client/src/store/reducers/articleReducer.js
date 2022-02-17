import {createSlice} from "@reduxjs/toolkit";

const ArticleReducer = createSlice({
    name: "articleName",
    initialState: {
        articleInit: null,
        articleIdInit: null
    },
    reducers: {
        getArticleList: ((state, action) => {
            state.articleInit = action.payload
        }),
        getArticleId: ((state, action) => {
            state.articleIdInit = action.payload
        })
    }
})

export default ArticleReducer.reducer;