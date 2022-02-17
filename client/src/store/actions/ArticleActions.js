import axios from "axios";
import {API_PATH} from "../../service/service";
import {toast} from "react-toastify";


export const createArticle = (data) => {
    return function (dispatch) {
        axios.post(API_PATH, data).then((res) => {
            dispatch(readArticleList())
            toast.success("created")
        }).catch((err) => {
            console.log(err);
            toast.error("error");
        })
    }
}

export const readArticleList = () => {
    return function (dispatch) {
        axios.get(API_PATH).then((res) => {
            dispatch({
                type: "articleName/getArticleList",
                payload: res.data
            })
        }).catch((err) => {
            console.log(err);
            toast.error("error");
        })
    }
}

export const readOneById = (id) => {
    return function (dispatch) {
        axios.get(API_PATH + "/" + id).then((res) => {
            dispatch({
                type: "articleName/getArticleId",
                payload: res.data
            })
        }).catch((err) => {
            console.log(err)
            toast.error("error");
        })
    }
}

export const updateArticle = (id, data) => {
    return function (dispatch) {
        axios.put(API_PATH + "/" + id, data).then((res) => {
            dispatch(readArticleList())
            toast.success("updated")
        }).catch((err) => {
            console.log(err);
            toast.error("error");
        })
    }
}

export const deleteArticle = (id) => {
    return function (dispatch) {
        axios.delete(API_PATH + "/" + id).then((res) => {
            dispatch(readArticleList())
            toast.success("deleted")
        }).catch((err) => {
            console.log(err)
            toast.error("error");
        })
    }
}