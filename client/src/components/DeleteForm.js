import {Box, Button, TextField, Typography} from "@mui/material";
import Modal from "@mui/material/Modal";
import {useState} from "react";
import {deleteArticle} from "../store/actions/ArticleActions";
import DeleteIcon from '@mui/icons-material/Delete';
import {connect} from "react-redux";

const style = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    p: 4,
    display: "flex",
    justifyContent: "space-between"
};

const DeleteForm = (props, {deleteArticle}) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const deleteById = () => {
        console.log("deleting", props.id);
        deleteArticle(props.id)
        deleteArticle(props.id)
        handleClose()
    }
    return (
        <>
            <Button onClick={handleOpen}
                    style={{color: "red"}}><DeleteIcon/></Button>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box>
                    <Typography>Do you want to delete that?</Typography>
                    <Box sx={style}>
                        <Button style={{color: "#ffffff", background: "green", marginTop: "8px"}}
                                onClick={handleClose}>cancel</Button>
                        <Button style={{
                            color: "#ffffff",
                            background: "red",
                            marginTop: "8px"
                        }}
                                onClick={deleteById}
                        >delete</Button>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}
export default connect((state) => {
    return {
        name: state
    }
}, {deleteArticle})(DeleteForm);