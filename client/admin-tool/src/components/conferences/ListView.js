import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextField } from "@material-ui/core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";

import "../../css/ListView.css";

const ListView = ({ items, classes, handleChange, keyword }) => {
    const [itemUrl, setItemUrl] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [overviewData, setOverviewData] = useState();
    const [urlButtonText, setUrlButtonText] = useState("Add url");
    const [index, setIndex] = useState(-1);

    useEffect(() => {
        setOverviewData(items);
    }, [items]);

    useEffect(() => {
        let text = "Add url";
        if (index >= 0) text = "Edit url";

        setUrlButtonText(text);
    }, [index]);

    const onInputChange = (e) => {
        if (e.target.name === "url") {
            setItemUrl(e.target.value);
        } else {
            setItemDescription(e.target.value);
        }

        if (!e.target.value) setIndex(-1);
    };

    const urlButtonClick = () => {
        if (itemUrl === "" || itemDescription === "") return;

        const objData = {
            url: itemUrl,
            description: itemDescription,
        };

        const dataObj = overviewData;
        if (index === -1) {
            dataObj.push(objData);
        } else {
            dataObj[index] = objData;
        }

        const event = {
            target: {
                name: keyword,
                value: { data: dataObj },
            },
        };

        handleChange(event);
        setItemDescription("");
        setItemUrl("");
        setIndex(-1);
    };

    const deleteUrl = (ind, e) => {
        e.stopPropagation();
        const dataObj = overviewData;
        dataObj.splice(ind, 1);
        const event = {
            target: {
                name: keyword,
                value: { data: dataObj },
            },
        };

        handleChange(event);
        setItemDescription("");
        setItemUrl("");
        setIndex(-1);
    };

    const handleNodeClick = (item, i, e) => {
        e.stopPropagation();
        setItemDescription(item.description);
        setItemUrl(item.url);
        setIndex(i);
    };

    const node = (item, i) => (
        <div
            className="listview-node"
            role="button"
            tabIndex={i}
            onClick={(e) => handleNodeClick(item, i, e)}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    handleNodeClick(item, i);
                }
            }}
        >
            <p className={index}>{item.description}</p>
            <FontAwesomeIcon
                icon={faTrash}
                className="listview-node-icon"
                onClick={(e) => deleteUrl(i, e)}
            />
        </div>
    );

    return (
        <div>
            <div className={`listview-container ${items.length === 0 ? "empty-listview" : null}`}>
                {items.map((item, idx) => node(item, idx))}
            </div>

            <div className="listview-forms">
                <TextField
                    name="description"
                    value={itemDescription}
                    error={false}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Enter description"
                    InputProps={{
                        classes: {
                            input: classes.resizeDetails,
                        },
                    }}
                    style={{ width: "50vw" }}
                    // disabled={isFormDisabled}
                    variant="outlined"
                />

                <TextField
                    name="url"
                    value={itemUrl}
                    error={false}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Enter url"
                    InputProps={{
                        classes: {
                            input: classes.resizeDetails,
                        },
                    }}
                    style={{ width: "100%" }}
                    // disabled={isFormDisabled}
                    variant="outlined"
                />

                <Button
                    text={urlButtonText}
                    onClickCallback={() => urlButtonClick()}
                    style={{ padding: "5px 15px", minWidth: "150px", marginLeft: "20px" }}
                />
            </div>
        </div>
    );
};

export default ListView;
