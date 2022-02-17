import {connect} from "react-redux";
import {useEffect} from "react";
import {readArticleList} from "../store/actions/ArticleActions";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Box, Button} from "@mui/material";
import {Link} from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import CreateForm from "../components/CreateForm";
import DeleteForm from "../components/DeleteForm";
import EditForm from "../components/EditForm";

const Articles = ({articleList, readArticleList}) => {

    useEffect(() => {
        readArticleList();
    }, [])

    console.log(articleList)

    return (
        <Box maxWidth={"700px"}
             margin={"auto"}
             marginTop={"10%"}>

            {articleList &&
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">HEADING</TableCell>
                            <TableCell align="right">CONTENT</TableCell>
                            <TableCell align="right">CREATED_AT</TableCell>
                            <TableCell align="right"> </TableCell>
                            <TableCell align="right"><CreateForm/></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {articleList.map((item, index) => {
                            return <TableRow key={item.id}
                                             sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                <TableCell component="th" scope="row">{item.id}</TableCell>
                                <TableCell align="right">
                                    <Link style={{textDecoration: "none"}}
                                          to={"/article/" + item.id}>{item.heading}
                                    </Link>
                                </TableCell>
                                <TableCell align="right">{item.content}</TableCell>
                                <TableCell align="right">{item.created_at}</TableCell>
                                {/* editing */}
                                <TableCell>
                                    <EditForm heading={item.heading}
                                    content={item.content} id={item.id}/>
                                </TableCell>
                                {/* deleting */}
                                <TableCell>
                                    <DeleteForm id={item.id}/>
                                </TableCell>
                            </TableRow>
                        })}

                    </TableBody>
                </Table>
            </TableContainer>
            }
        </Box>
    )
}
export default connect((state) => {
    return {
        articleList: state.articleReducer.articleInit
    }
}, {readArticleList})(Articles);