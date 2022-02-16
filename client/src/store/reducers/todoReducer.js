import {createSlice} from "@reduxjs/toolkit";

const TodoReducer = createSlice({
    name: "todoName",
    initialState: {
        todoList: null
    },
    reducers: {
        getTodoList: ((state, action) => {
            state.todoList = action.payload
        })
    }
})

export default TodoReducer.reducer;