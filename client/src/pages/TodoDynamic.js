import {useEffect} from "react";
import {useParams} from "react-router-dom";

const TodoDynamic = () => {

    useEffect(() => {

    }, [])

    //for getting id from path todo/1
    let params = useParams()
    let id = params.id

    return (
        <>
            {<p>id is {id}</p>}
        </>
    )
}

export default TodoDynamic;