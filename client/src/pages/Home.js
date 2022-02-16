import {connect} from "react-redux";
import {useEffect, useState} from "react";
import {readTodoList} from "../store/actions/TodoActions";

const Home = ({todoList, readTodoList}) => {

    const [init, setInit] = useState(null);

    useEffect(() => {
        readTodoList()
    }, [])

    console.log(todoList)

    return (
        <div>
            <h1>Home Page connection with Redux</h1>
            {todoList &&
            <div>
                <p>CONNECTION IS SUCCESSFUL,IF IT IS APPEARING</p>
                <p>WATCH IN CONSOLE :)</p>
            </div>}
        </div>
    )
}
export default connect((state) => {
    return {
        todoList: state.todoReducer.todoList
    }
}, {readTodoList})(Home);