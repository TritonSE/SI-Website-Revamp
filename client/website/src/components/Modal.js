/**
 * This is a custom modal that can be reused for other pages.
 * Takes in the following props:
 *  - open: control if the modal should be open or not
 *  - hide: function to hide the modal
 *  - text: required, pass in text for the modal.
 *  - url: required if button is rendered within modal,
 *         directs the user to the specified link.
 *
 * @summary     popup modal
 * @author      Amitesh Sharma
 */

import React from "react";
import { Modal } from "react-bootstrap";
import "../css/Modal.css";

export default function CustomModal(props) {
    // redirect to the registration url
    const redirectLink = () => {
        window.location.href = props.url;
    };

    return (
        <Modal show={props.open} onHide={() => props.hide(false)} centered>
            <div className="modal-body-div">
                <div className="modal-body-content">
                    <Modal.Body>
                        {/* The text of the modal */}
                        <p>{props.text}</p>

                        {/* Contains the two buttons within the modal */}
                        <div className="redirect-div">
                            {/* The close modal button */}
                            <button
                                className="redirect-cancel"
                                onClick={() => props.hide(false)}
                                type="button"
                            >
                                Cancel
                            </button>

                            {/* the redirect button */}
                            <button
                                className="redirect-link"
                                onClick={() => redirectLink()}
                                type="button"
                            >
                                Go
                            </button>
                        </div>
                    </Modal.Body>
                </div>
            </div>
        </Modal>
    );
}
