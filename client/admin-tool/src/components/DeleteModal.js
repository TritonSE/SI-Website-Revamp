/**
 * Displays Delete Modal on admin tool. It is a reusable modal that warns the user that they are
 * about to delete an object permanently. It offers the user the ability to either negate or proceed with their
 * action.
 *
 * Component offers some customizability, mostly for the style of the buttons. It triggers callback for
 * any action done by the user, whether they choose to negate or proceed with the deletion.
 *
 * @summary     Allows for item deletion.
 * @author      Amrit Kaur Singh
 */
import React from "react";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { DialogContentText } from "@material-ui/core";

import Button from "./Button";

import "../css/DeleteModal.css";

/**
 *
 * Required Params
 * @param {boolean} open - Controls dialogue visibility. True indicates show, false indicates hide.
 * @param {function} handleClose - Callback function called whenever the user wants to close/hide the modal (negate button).
 * @param {function} deleteButtonCallback - Callback function called whenever the user wants to proceed with deletion.
 *
 * Optional Parms
 * @param {string} itemToBeDeletedTxt - Details which object is about to be deleted.
 *
 * @returns {Modal Object}
 */
export default function DeleteModal({
    open,
    itemToBeDeletedTxt = null, // default
    handleClose,
    deleteButtonCallback,
}) {
    return (
        <Dialog open={open} onClose={handleClose} id="delete-modal">
            <DialogContent className="delete-wrapper">
                {/* Confirmation prompt */}
                <DialogContentText className="delete-confirmation-text">
                    Are you sure you want to delete this? <br />
                    The following item will be deleted permanently.
                    {itemToBeDeletedTxt ? (
                        <span style={{ color: "#EA4444" }}>
                            {" "}
                            <br />
                            <br />
                            {itemToBeDeletedTxt}{" "}
                        </span>
                    ) : null}
                </DialogContentText>
                <br />
                <div className="delete-modal-actions">
                    {/* Negate Delete Action */}
                    <Button
                        text="Cancel"
                        onClickCallback={handleClose}
                        style={{
                            color: "black",
                            backgroundColor: "white",
                            border: "1px solid black",
                        }}
                    />
                    {/* Proceed w/ Delete Action */}
                    <Button
                        text="Delete"
                        onClickCallback={deleteButtonCallback}
                        style={{ backgroundColor: "#EA4444" }}
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
}
