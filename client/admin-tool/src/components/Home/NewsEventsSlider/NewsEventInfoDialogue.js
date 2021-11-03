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

export default function NewsEventInfoDialogue({ content, buttonText, index, open, handleClose, buttonClickCallBack }) {


    const [formContent, updateFormContent ] = React.useState({
        title: '',
        description: '',
        imageLink: '',
        redirectLink: '',
        openInSameTab: false
    });

    const [isFormDisabled, setIsFormDisabled ] = React.useState(false);

    const [formErrors, updateFormErrors ] = React.useState({
        title: false,
        imageLink: false,
        redirectLink: false
    });

    React.useEffect(() => {

        updateFormContent({
            title: content['title'] || '',
            description: content['description'] || '',
            imageLink: content['imageLink'] || '',
            redirectLink: content['redirectLink'] || '',
            openInSameTab: content['openInSameTab'] || false
        });
    }, [content]);

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
                borderRadius: "30px",
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

    const handleFormContentChange = key => event => {
        if( key === "openInSameTab") updateFormContent({ ...formContent, [key]: event.target.checked }); //checkbox
        else updateFormContent({ ...formContent, [key]: event.target.value });
    };

    const handleFormValidation = () => {
        // disable form 
        setIsFormDisabled(true);

        // tracker for required fields
        const errors = {
            title: false,
            imageLink: false,
            redirectLink: false
        };

        // loop through all required fields and check if they values
        let doesFormHaveErrors = false; 
        for(const key in errors){
        
            const value = formContent[key];
            if(value.length < 1) {
                doesFormHaveErrors = true; 
                errors[key] = true; 
            }

        }

        // update errors (if any) 
        updateFormErrors(errors);
        // enable form 
        setIsFormDisabled(false);

        // callback if no errors were found
        if(!doesFormHaveErrors) buttonClickCallBack(formContent);
    }

    const helperTextStyles = useHelperTextStyles();

    return (
        <Dialog open={open} onClose={handleClose} id="news-event-info-dialogue">
            <DialogContent>
            <p className="slide-num"> Slide #{index + 1}</p>
            <form className={helperTextStyles.form} autoComplete="off" >

                    Title  {asterisk()}
                    <TextField
                        margin="dense"
                        placeholder="Insert Title"
                        fullWidth
                        variant="outlined" 
                        disabled={isFormDisabled}
                        error={formErrors.title}
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
                            disabled={isFormDisabled}
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
                    value={formContent.imageLink}
                    disabled={isFormDisabled}
                    error={formErrors.imageLink}
                    placeholder="Insert Image Link"
                    fullWidth
                    variant="outlined" 
                    onChange={handleFormContentChange("imageLink")}
                />


                Redirect to {asterisk()}
                <TextField
                    margin="dense"
                    disabled={isFormDisabled}
                    error={formErrors.redirectLink}
                    placeholder="Website or PDF Link"
                    value={formContent.redirectLink}
                    fullWidth
                    variant="outlined" 
                    helperText={`To link to a page on Sakyadhita's website, paste page's url link.`}
                    onChange={handleFormContentChange("redirectLink")}
                />
            
                <FormControlLabel  
                    control={
                    <Checkbox 
                    checked={formContent.openInSameTab}
                    onChange={handleFormContentChange("openInSameTab")}
                    disabled={isFormDisabled}
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
                    <Button text={buttonText} onClickCallback={handleFormValidation}/> 
                </div>
                
            </DialogActions>
        </Dialog>
    );
}
