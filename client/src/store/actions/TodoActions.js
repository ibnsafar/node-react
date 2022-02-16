import axios from "axios";
import {API_PATH} from "../../service/service";


export const createTodo = (data) => {
    return function (dispatch) {
        axios.post(API_PATH, data).then((res) => {
            dispatch(readTodoList())
        }).catch((err) => {
            console.log(err);
        })
    }
}

export const readTodoList = () => {
    return function (dispatch) {
        axios.get(API_PATH).then((res) => {
            dispatch({
                type: "todoName/getTodoList",
                payload: res.data
            })
        }).catch((err) => {
            console.log(err);
        })
    }
}

export const updateTodo = (id, data) => {
    return function (dispatch) {
        axios.put(API_PATH + "/" + id).then((res) => {
            dispatch(readTodoList())
        }).catch((err) => {
            console.log(err);
        })
    }
}

export const deleteTodo = (id) => {
    return function (dispatch) {
        axios.delete(API_PATH + "/" + id).then((res) => {
            dispatch(readTodoList())
        }).catch((err) => {
            console.log(err)
        })
    }
}