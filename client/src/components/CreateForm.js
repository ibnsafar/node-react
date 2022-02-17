import {useState} from "react";
import {Box, Button, TextField} from "@mui/material";
import {createArticle} from "../store/actions/ArticleActions";
import Modal from '@mui/material/Modal';
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
    flexDirection: "column"
};

const CreateForm = ({createArticle}) => {
    const [heading, setHeading] = useState('');
    const [content, setContent] = useState('');
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleHeading = (event) => {
        setHeading(event.target.value);
    }
    const handleContent = (event) => {
        setContent(event.target.value)
    }
    const save = () => {
        console.log("creating")
        console.log({heading, content})
        createArticle({heading, content});
        handleClose();
    }

    return (
        <>
            <Button onClick={handleOpen}
                    style={{color: "green"}}>create</Button>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <TextField
                        value={heading}
                        onChange={handleHeading}
                        id="heading"
                        name="heading"
                        label="heading"
                        variant="outlined"/>
                    <TextField
                        style={{marginTop: "8px"}}
                        onChange={handleContent}
                        value={content}
                        id="content"
                        name="content"
                        label="content"
                        variant="outlined"/>
                    <Button style={{color: "green", marginTop: "8px"}}
                            onClick={save}>submit</Button>
                </Box>
            </Modal>
        </>
    )
}
export default connect((state)=>{
    return{
        name:state
    }}, {createArticle})(CreateForm);