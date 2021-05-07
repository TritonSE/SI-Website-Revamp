import React from "react";
import { Modal } from "react-bootstrap";
import "../../css/Modal.css";

export default function CustomModal(props) {
    const redirectLink = () => {};

    return (
        <Modal show={props.open} onHide={() => props.hide(false)} centered>
            <div className="modal-body-div">
                <div className="modal-body-content">
                    <Modal.Body>
                        <p>
                            You will be redirected to a new link to sign up for the conference. Do
                            you want to be redirected?
                        </p>
                        <div className="redirect-div">
                            <button
                                className="redirect-cancel"
                                onClick={() => props.hide(false)}
                                type="button"
                            >
                                Cancel
                            </button>
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
