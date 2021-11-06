import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextField } from "@material-ui/core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import "../../css/ListViewImages.css";

const ListViewImages = ({ items, classes, handleChange }) => {
    const [singleUrl, setSingleUrl] = useState("");
    const [imageUrls, setImageUrls] = useState();
    const [urlText, setUrlText] = useState("Add url");
    const [index, setIndex] = useState(-1);

    useEffect(() => {
        setImageUrls(items);
    }, [items]);

    useEffect(() => {
        let text = "Add url";
        if (index >= 0) text = "Edit url";

        setUrlText(text);
    }, [index]);

    const handleNodeClick = (url, nodeIndex) => {
        setSingleUrl(url);
        setIndex(nodeIndex);
    };

    const onInputChange = (e) => {
        setSingleUrl(e.target.value);
        if (!e.target.value) setIndex(-1);
    };

    const urlButtonClick = () => {
        if (singleUrl === "") return;

        if (index === -1) {
            const images = imageUrls;
            images.push(singleUrl);
            const event = {
                target: {
                    name: "slideShowImages",
                    value: { urls: images },
                },
            };

            handleChange(event);
            setSingleUrl("");
        }
    };

    const deleteUrl = (ind) => {
        const images = imageUrls;
        images.splice(ind, 1);
        const event = {
            target: {
                name: "slideShowImages",
                value: { urls: images },
            },
        };
        handleChange(event);
    };

    const node = (url, i) => (
        <div
            role="button"
            tabIndex={i}
            className="listviewimages-node"
            onClick={() => handleNodeClick(url, i)}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    handleNodeClick(url, i);
                }
            }}
        >
            <p>{url}</p>
            <FontAwesomeIcon
                icon={faTrash}
                className="listviewimages-node-icon"
                onClick={() => deleteUrl(i)}
            />
        </div>
    );

    return (
        <div>
            <div className="listviewimages-container">
                {items.map((item, itemIndex) => node(item, itemIndex))}
            </div>

            <div className="listviewimages-forms">
                <TextField
                    name="theme"
                    value={singleUrl}
                    error={false}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Start writing here "
                    InputProps={{
                        classes: {
                            input: classes.resizeDetails,
                        },
                    }}
                    style={{ width: "100%" }}
                    // disabled={isFormDisabled}
                    variant="outlined"
                />

                <Button text={urlText} onClickCallback={() => urlButtonClick()} />
            </div>
        </div>
    );
};

export default ListViewImages;
