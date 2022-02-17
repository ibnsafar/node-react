import {useState} from "react";
import {Box, Button, TextField} from "@mui/material";
import {updateArticle} from "../store/actions/ArticleActions";
import Modal from '@mui/material/Modal';
import {connect} from "react-redux";
import EditIcon from '@mui/icons-material/Edit';
import TextareaAutosize from '@mui/material/TextareaAutosize';

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

const EditForm = (props, {updateArticle}) => {
    const [heading, setHeading] = useState(props.heading);
    const [content, setContent] = useState(props.content);

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
        console.log("updating")
        console.log({heading, content})
        updateArticle(props.id, {heading, content});
        handleClose();
    }

    return (
        <>
            <Button onClick={handleOpen}
                    style={{color: "orange"}}><EditIcon/></Button>
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
                    <TextareaAutosize
                        style={{
                            marginTop: "8px",
                            width: "100%",
                            height:"200px"
                        }}
                        onChange={handleContent}
                        value={content}
                        id="content"
                        name="content"
                        aria-label="minimum height"
                        minRows={3}
                        placeholder="content ..."
                    />
                    {/*<TextField*/}
                    {/*    label="content"*/}
                    {/*    variant="outlined"/>*/}
                    <Button style={{color: "green", marginTop: "8px"}}
                            onClick={save}>submit</Button>
                </Box>
            </Modal>
        </>
    )
}
export default connect((state) => {
    return {
        name: state
    }
}, {updateArticle})(EditForm);