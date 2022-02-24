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

import "../css/Button.css";

/**
 *
 * @param {string} text - Button content as it will be shown to the user
 * @param {function} onClickCallback - Function will be callbacked whenever the button is clicked
 * @param {JSON} style - Any in-line css customizations on the button
 * @returns
 */
export default function Button({ isDisabled = false, text, onClickCallback, style }) {
    return (
        <button
            type="button"
            onClick={onClickCallback}
            className="site-button"
            style={style}
            disabled={isDisabled}
        >
            {text}
        </button>
    );
}
