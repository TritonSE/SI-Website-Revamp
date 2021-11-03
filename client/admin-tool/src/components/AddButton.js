/**
 * Reusable button for the admin page, specifically for add functionality. Allows for customization
 * as needed.
 *
 * By default, renders as purple with white text.
 *
 * @summary Customizable Button Component
 * @author  Amrit Singh
 */
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "../css/AddButton.css";

/**
 *
 * @param {function} onClickCallback - Function will be callbacked whenever the button is clicked (REQUIRED)
 *
 * @param {string} text - Button content as it will be shown to the user
 * @param {JSON} className - Any additional classes to be added to the button (will be given precedent)
 * @param {JSON} style - Any in-line css customizations on the button
 * @returns
 */
export default function AddButton({
    text = "Add New", // default value
    onClickCallback,
    className = "", // default value
    style = {}, // default value
}) {
    // The "+" icon on the 'add' button
    const addIcon = <FontAwesomeIcon icon={faPlus} style={{ marginRight: "10px" }} />;

    return (
        <button
            type="button"
            className={`add-button ${className}`}
            style={style}
            onClick={onClickCallback}
        >
            {addIcon} {text}
        </button>
    );
}
