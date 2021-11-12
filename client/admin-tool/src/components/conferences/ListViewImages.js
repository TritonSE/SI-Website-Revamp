import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextField } from "@material-ui/core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import "../../css/ListViewImages.css";

const ListViewImages = ({ items, classes, handleChange, formDisabled, error }) => {
    const [singleUrl, setSingleUrl] = useState("");
    const [imageUrls, setImageUrls] = useState();
    const [urlButtonText, setUrlButtonText] = useState("Add url");
    const [index, setIndex] = useState(-1);

    useEffect(() => {
        setImageUrls(items);
    }, [items]);

    useEffect(() => {
        let text = "Add url";
        if (index >= 0) text = "Edit url";

        setUrlButtonText(text);
    }, [index]);

    const handleNodeClick = (url, nodeIndex, e) => {
        e.stopPropagation();
        setSingleUrl(url);
        setIndex(nodeIndex);
    };

    const onInputChange = (e) => {
        setSingleUrl(e.target.value);
        if (!e.target.value) setIndex(-1);
    };

    const urlButtonClick = () => {
        if (singleUrl === "") return;

        const images = imageUrls;
        if (index === -1) {
            images.push(singleUrl);
        } else {
            images[index] = singleUrl;
        }

        const event = {
            target: {
                name: "slideShowImages",
                value: { urls: images },
            },
        };

        handleChange(event);
        setSingleUrl("");
        setIndex(-1);
    };

    const deleteUrl = (ind, e) => {
        e.stopPropagation();
        const images = imageUrls;
        images.splice(ind, 1);
        const event = {
            target: {
                name: "slideShowImages",
                value: { urls: images },
            },
        };

        handleChange(event);
        setSingleUrl("");
        setIndex(-1);
    };

    const node = (url, i) => (
        <div
            role="button"
            tabIndex={i}
            className="listviewimages-node"
            onClick={(e) => handleNodeClick(url, i, e)}
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
                onClick={(e) => deleteUrl(i, e)}
            />
        </div>
    );

    return (
        <div>
            <div
                className={`listviewimages-container ${
                    items.length === 0 ? "empty-listviewimages" : null
                }`}
            >
                {items.map((item, itemIndex) => node(item, itemIndex))}
            </div>

            <div className="listviewimages-forms">
                <TextField
                    name="theme"
                    value={singleUrl}
                    error={error}
                    onChange={(e) => onInputChange(e)}
                    placeholder="Start writing here "
                    formDisabled={formDisabled}
                    InputProps={{
                        classes: {
                            input: classes.resizeDetails,
                        },
                    }}
                    style={{ width: "100%" }}
                    disabled={formDisabled}
                    variant="outlined"
                />
                <span className="required-asterisk"> * </span>

                <Button
                    text={urlButtonText}
                    onClickCallback={() => urlButtonClick()}
                    style={{ padding: "5px 15px", width: "100px", marginLeft: "20px" }}
                />
            </div>
        </div>
    );
};

export default ListViewImages;
