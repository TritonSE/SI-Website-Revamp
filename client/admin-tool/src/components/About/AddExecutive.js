import React from "react";

import { TextField, makeStyles, Snackbar, Checkbox, FormGroup, FormControlLabel, MenuItem} from "@material-ui/core";
import Button from "../Button";

import "../../css/AddExecutive.css";

export default function AddExecutive({
    content,
    showingBackground,
    newCommittee,
    updateItem,
    addItem,
    index
}) {
    const [data, setData] = React.useState({
        startYear: "",
        endYear: "",
        rank: "",
        name: "",
        position: "",
        bio: "",
        imageLink: "",
        redirectLink: "",
        openInSameTab: false,
    });

    const [dataErrors, setDataErrors] = React.useState({
        startYear: false,
        endYear: false,
        rank: false,
        name: false,
        position: false,
        bio: false,
        imageLink: false,
        redirectLink: false,
        openInSameTab: false,
    })

    const [isPageDisabled, setIsPageDisabled] = React.useState(false);
    
    const [positionList, setPositionList] = React.useState([
        {position: "President", rank: 1},
        {position: "Vice President", rank: 2},
        {position: "Secretary", rank: 3},
        {position: "Recording Secretary", rank: 4},
        {position: "Corresponding Secretary", rank: 5},
        {position: "Branch & Chapter Coordinator", rank: 6},
        {position: "Treasurer", rank: 7},
    ]);
    
    const [snackbar, handleSnackbar] = React.useState({
        open: false,
        message: "",
    });

    const loadData = () => {

    }

    React.useEffect(async () => {
        setData(content);
    }, []);

    const validateData = () => {
        data["startYear"] = 2000;
        data["endYear"] = 2003;

        if(newCommittee) addItem(data);
        else updateItem(data, index);
    }

    const useHelperTextStyles = makeStyles(() => ({
        root: {
            // input field - general layout
            "& .MuiTextField-root": {
                width: "100%",
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
    
    const classes = useHelperTextStyles();

    const inputLabels = [
        { title: "Name", name: "name", label: "Insert name here"},
        { title: "Position", name: "position", label: "Choose position"},
        { title: "Bio", name: "bio", label: "Type description here"},
        { title: "Image", name: "imageLink", label: "Insert image link"},
        { title: "Redirect to", name: "redirectLink", label: "Insert URL or PDF link"},
    ];

    return (
        <>
        <div className="bg-shadow" onClick={() => showingBackground(false)}></div>
        <div className="add-exec-popup">
            {
                inputLabels.map((input) => {
                    return (
                        <>
                            <h3>{input.title}</h3>
                            <TextField
                                disabled={isPageDisabled}
                                value={data[input.name]}
                                margin="dense"
                                placeholder={input.label}
                                multiline={input.name === "bio" ? true : false}
                                minRows={input.name === "bio" ? 4 : 1}
                                variant="outlined"
                                className={classes.root}
                                select={input.name === "position" ? true : false}
                                onChange={(event) => {
                                    input.name === "position" ? (
                                        <>
                                            {setData({ ...data, [input.name]: event.target.value, "rank": event.currentTarget.getAttribute("rank")})}
                                        </>
                                    ) : (
                                        <>
                                            {setData({ ...data, [input.name]: event.target.value})}
                                        </>
                                    )
                                }}
                                style={input.name === "bio" ? {
                                    borderRadius: "5px"
                                } : {}}
                            >
                                {
                                    input.name === "position" ? (
                                        positionList.map((position) => {
                                            return (
                                                <MenuItem rank={position.rank} value={position.position}>
                                                    {position.position}
                                                </MenuItem>
                                            )
                                        })
                                    ) : (
                                        <>
                                        </>
                                    )
                                }
                            </TextField>
                        </>
                    )
                })
            }
            <FormGroup>
                <FormControlLabel control={<Checkbox style={{color: "var(--orange)"}}/>} label="Open link in same tab" />
            </FormGroup>
            <Button 
                className="add-exec-button" 
                text = {newCommittee ? "Add" : "Update"} 
                style = {{
                    justifySelf: "center"
                }}
                onClickCallback={validateData}
            />
        </div>
        <Snackbar
            open={snackbar.open}
            autoHideDuration={6000}
            onClose={() => handleSnackbar({ ...snackbar, open: false })}
            message={snackbar.message}
        />
        </>
    )
}