/**
 * Reusable button for the admin page. Allows for customization
 * as needed.
 *
 * By default, renders as orange with white text.
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
 * @param {string} text - Button content as it will be shown to the user
 * @param {function} onClickCallback - Function will be callbacked whenever the button is clicked
 * @param {JSON} style - Any in-line css customizations on the button
 * @returns
 */
export default function AddButton({
    text = "Add New",
    onClickCallback,
    className = "",
    style = {},
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
