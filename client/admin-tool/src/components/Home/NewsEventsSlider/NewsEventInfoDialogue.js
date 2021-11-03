import React from "react";
import Button from "../../Button";

import { makeStyles } from '@material-ui/core/styles';
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import "../../../css/NewsEventInfoDialogue.css";

const TITLE_MAX_CHARS = 20;
const DESCRIPTION_MAX_CHARS = 175;

export default function NewsEventInfoDialogue({ content, index, open, handleClose, buttonClickCallBack }) {
    
    const [formContent, updateFormContent ] = React.useState({
        title: '',
        description: '',
        imageLink: '',
        redirectLink: '',
        openInSameTab: false
    });

    const asterisk = () => {
        return <span className="asterisk"> * </span>;
    }

    const useHelperTextStyles = makeStyles((theme) => ({
        
        helperText: {
            textAlign: "right !important",
            color: "var(--darkorange) !important"
        },
        form: {
            // input field - general layout
            "& .MuiTextField-root": {
                width: "95%",
            },
            // default rendering of field
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: "black",
                borderRadius: "10px",
            },
            // on focus rendering of field
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#6652a0",
            },
            "& .MuiInputLabel-outlined.Mui-focused": {
                color: "#d77a3d",
            },
            // on error rendering of field
            "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
                borderColor: "red",
            },
        },
    }));

    const test = () => {
        alert(JSON.stringify(formContent));
    }

    const handleFormContentChange = key => event => {
        if( key === "openInSameTab") updateFormContent({ ...formContent, [key]: event.target.checked });
        else updateFormContent({ ...formContent, [key]: event.target.value });
    };

    const helperTextStyles = useHelperTextStyles();

    return (
        <Dialog open={open} onClose={handleClose} id="news-event-info-dialogue">
            {/* <DialogTitle>Subscribe</DialogTitle> */}
            <DialogContent>
            <p className="slide-num"> Slide #{index + 1}</p>
            <form  className={helperTextStyles.form} autoComplete="off" >

                    Title  {asterisk()}
                    <TextField
                        margin="dense"
                        placeholder="Insert Title"
                        fullWidth
                        variant="outlined" 
                        inputProps={{ maxLength: TITLE_MAX_CHARS }}
                        value={formContent.title}
                        helperText={`${formContent.title.length}/${TITLE_MAX_CHARS} charachters`}
                        onChange={handleFormContentChange("title")}
                        FormHelperTextProps={{
                            classes:{
                                root: helperTextStyles.helperText
                            }
                        }}
                    />
                       
                   

                    Description 
                        <TextField
                            multiline
                            rows={4}
                            margin="dense"
                            placeholder="Type Description Here"
                            fullWidth
                            variant="outlined" 
                            inputProps={{ maxLength: DESCRIPTION_MAX_CHARS }}
                            value={formContent.description}
                            helperText={`${formContent.description.length}/${DESCRIPTION_MAX_CHARS} charachters`}
                            onChange={handleFormContentChange("description")}
                            FormHelperTextProps={{
                                classes:{
                                    root: helperTextStyles.helperText
                                }
                            }}
                        />    

                   
                
                 Image {asterisk()}
                  <TextField
                    margin="dense"
                    placeholder="Insert Image Link"
                    fullWidth
                    variant="outlined" 
                />


                Redirect to {asterisk()}
                <TextField
                    margin="dense"
                    placeholder="Website or PDF Link"
                    fullWidth
                    variant="outlined" 
                    helperText={`To link to a page on Sakyadhita's website, paste page's url link.`}
                />
                {/* <Checkbox
                    checked={formContent.openInSameTab}
                    onChange={handleFormContentChange("openInSameTab")}
                    label="Open link in same tab"
                    inputProps={{ 'aria-label': 'controlled' }}
                /> */}
                <FormControlLabel  
                    control={
                    <Checkbox 
                    checked={formContent.openInSameTab}
                    onChange={handleFormContentChange("openInSameTab")}
                    sx={{
                        '&.Mui-checked': {
                          color: "var(--darkorange)",
                        },
                      }}
                    />} 
                    label="Open link in same tab" 
                    
                />

             </form>

            </DialogContent>
            <DialogActions>
                <div className="Dialogue-Button">
                    <Button text="Update" onClickCallback={buttonClickCallBack}/> 
                </div>
                
            </DialogActions>
        </Dialog>
    );
}
