import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {readOneById} from "../store/actions/ArticleActions";
import {Box, Paper} from "@mui/material";
import {connect} from "react-redux";

const Article = ({readOneById, article}) => {

    const params = useParams();

    useEffect(() => {
        console.log(params.id);
        readOneById(params.id);
    }, [])

    if (article) {
        console.log(article)
    }
    return (
        <>
            <Box maxWidth={"700px"}
                 margin={"auto"}
                 marginTop={"10%"}>
                {article &&
                <Paper style={{
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    <p>ID: {article.id}</p>
                    <p>Heading: {article.heading}</p>
                    <p>Content: {article.content}</p>
                    <p>Created at: {article.created_at}</p>
                    <p>Updated at:{article.updated_at}</p>
                </Paper>
                }
            </Box>
        </>
    )
}
export default connect((state) => {
    return {
        article: state.articleReducer.articleIdInit
    }
}, {readOneById})(Article);