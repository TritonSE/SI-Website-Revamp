import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import { Checkbox, FormGroup, FormControlLabel, FormHelperText, MenuItem, Snackbar } from "@material-ui/core";

import Button from "../Button";

import "../../css/EPublicationItem.css";

export default function EPublicationItem({
    content,
    newEPublication,
    onDeleteCallback,
    onSaveCallback,
    getFilters,
    fetchFeatured,
}) {
    const [data, setData] = React.useState({
        title: "",
        author: "",
        feature: false,
        description: "",
        imageLink: "",
        pdfLink: "",
        filters: [{filterId: 0}],
    });

    const [filters, setFilters] = React.useState([{}]);
    const [filterName, setFilterName] = React.useState("Default");
    const [featuredList, setFeaturedList] = React.useState([{}]);

    const [dataErrors, setDataErrors] = React.useState({
        title: false,
        author: false,
        feature: false,
        description: false,
        imageLink: false,
        pdfLink: false,
        filters: false,
    });

    const [isPageDisabled, setIsPageDisabled] = React.useState(false);

    const [snackbar, handleSnackbar] = React.useState({
        open: false,
        message: "",
    });

    React.useEffect(async () => {
        if (!content) return;

        const filters = await getFilters();

        setFilters(filters);
        setFilterName("Default");

        filters.map(filter => {
            if(content["filters"][0] !== undefined && filter.id === content["filters"][0].filterId) {
                setFilterName(filter.title)
            }
        })

        const featuredList = await fetchFeatured();
        setFeaturedList(featuredList);

        setDataErrors({
            title: false,
            author: false,
            feature: false,
            description: false,
            imageLink: false,
            pdfLink: false,
            filters: false,
        });

        setData({
            title: content["title"] || "",
            author: content["author"] || "",
            feature: content["feature"] || "",
            description: content["description"] || "",
            imageLink: content["imageLink"] || "",
            pdfLink: content["pdfLink"] || "",
            filters: content["filters"] || "",
        });

        setIsPageDisabled(false);
    }, [content])

    const validateData = () => {
        setIsPageDisabled(true);

        console.log(content);

        let errors = {
            title: false,
            author: false,
            feature: false,
            description: false,
            imageLink: false,
            pdfLink: false,
            filters: false,
        };

        let hasErrors = false;
        let errorString = "Error: ";

        Object.keys(data).forEach((key) => {
            if(key === "feature" && data[key].length < 1) {
                data[key] = false;
            }

            if (data[key].length < 1 && key !== "description") {
                errors[key] = true;
                hasErrors = true;
                errorString = "Error: all fields are required;";
            }
        });

        console.log(data);

        if(data["feature"] === true && featuredList == 6) {
            let alreadyFeatured = false;

            featuredList.map(feature => {
                if(feature.title == data["feature"])
                    alreadyFeatured = true;
            })

            if(!alreadyFeatured) {
                errors["feature"] = true;
                hasError = true;
                errorString += " there are already 6 featured publications;"
            }
        }

        setDataErrors(errors);
        setIsPageDisabled(false);

        console.log(errors);

        if (!hasErrors) onSaveCallback(data);
        else handleSnackbar({ open: true, message: errorString });
    }

    const asterisk = () => <span className = "required-asterisk">*</span>

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

    const getFilterId = (name) => {
        let selectedId = -1;

        filters.map(filter => {
            if(filter.title === name) {
                selectedId = filter.id;
            }
        })

        return selectedId;
    }

    const inputLabels = [
        {title: "Details", name: "title", label: "Title"},
        {title: "", name: "author", label: "Author"},
        {title: "", name: "filter", label: "Filter"},
        {title: "Thumbnail Image", name: "imageLink", label: "Insert site link"},
        {title: "Redirect To", name: "pdfLink", label: "Insert PDF link"},
        {title: "", name: "feature", label: "Feature on header"},
        {title: "Description", name: "description", label: "Type description here"},
    ];

    return(
        <div>
            <div className="epublication-grid">
                <div classname="epublication-grid-left">
                    {inputLabels.map((input) => {
                        return (
                            <>
                                {input.title === "" ? "" : <h2 className="title">{input.title}</h2>}
                                {input.name === "feature" ? (
                                    <>
                                        <FormGroup>
                                            <FormControlLabel control={<Checkbox 
                                                checked={data[input.name]}
                                                style={{color: "#ea8644"}}
                                                helperText="Publications that are already featured have an orange border."
                                                onChange={(event) => {
                                                    setData({ ...data, [input.name]: event.target.checked });
                                                }}
                                            />} label={input.label} />
                                            <FormHelperText style={{fontSize:13, marginBottom:-15}}>Featured publications have an orange border. <br/> A maximum of 6 can be featured at a time.</FormHelperText>
                                        </FormGroup>
                                        <br />
                                    </>
                                ) : (
                                    <>
                                        <TextField
                                            margin="dense"
                                            disabled={isPageDisabled}
                                            placeholder={input.label}
                                            value={input.name !== "filter" ? data[input.name] : filterName}
                                            error={dataErrors[input.label]}
                                            select={input.name === "filter" ? true : false}
                                            multiline={input.name === "description" ? true : false}
                                            minRows={input.name === "description" ? 4 : 1}
                                            variant="outlined"
                                            className={classes.root}
                                            onChange={(event) => {
                                                    input.name !== "filter" ? 
                                                (
                                                    setData({ ...data, [input.name]: event.target.value })
                                                ) : (
                                                    setData({ ...data, "filters": [{filterId: getFilterId(event.target.value)}]}),
                                                    setFilterName(event.target.value)
                                                )
                                            }}
                                            style={{
                                                minWidth: 400,
                                            }}
                                        >
                                            <MenuItem key={1} value="Default" disabled>
                                                Select a filter
                                            </MenuItem>
                                            {input.name === "filter" ? (
                                                filters.map((filter, key) => {
                                                    return <MenuItem key={key} value={filter.title}>
                                                        {filter.title}
                                                    </MenuItem>
                                                })
                                            ) : (
                                                ""
                                            )}
                                        </TextField>
                                        {input.name !== "description" ? asterisk() : ""}
                                        <br />
                                    </>
                                )}
                            </>
                        )
                    })}
                </div>
                <div className="epublication-grid-right">
                    {newEPublication ? (
                        <Button text="Post" onClickCallback={validateData} />
                    ) : (
                        <>
                            <Button
                                style={{ display: "inline", marginRight: 20 }}
                                text="Update"
                                onClickCallback={validateData}
                            />
                            <Button
                                style={{ backgroundColor: "rgb(234, 68, 68)" }}
                                text="Delete"
                                onClickCallback={onDeleteCallback}
                            />
                        </>
                    )}
                </div>
            </div>
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={() => handleSnackbar({ ...snackbar, open: false })}
                message={snackbar.message}
            />
        </div>
    )

}