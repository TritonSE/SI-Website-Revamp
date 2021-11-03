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

import Button from "./Button";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { DialogContentText } from "@material-ui/core";

import "../css/DeleteModal.css";
 
 /**
  *
  * @param {string} text - Button content as it will be shown to the user
  * @param {function} onClickCallback - Function will be callbacked whenever the button is clicked
  * @param {JSON} style - Any in-line css customizations on the button
  * @returns
  */
 export default function DeleteModal({ open, itemToBeDeletedTxt = null, handleClose, deleteButtonCallback }) {
     return (
        <Dialog open={open} onClose={handleClose} id="delete-modal">
            <DialogContent className="delete-wrapper">
                <DialogContentText className="delete-confirmation-text">
                    Are you sure you want to delete this? <br/>
                    The following item will be deleted permanently.
                    {
                        itemToBeDeletedTxt ? <span style={{"color": "#EA4444"}}> <br/><br/>{itemToBeDeletedTxt} </span>: null
                    } 
                </DialogContentText>
                <br/>
                <div className="delete-modal-actions">
                    <Button text="Cancel" onClickCallback={handleClose} style={{"color": "black", "backgroundColor": "white", "border": "1px solid black"}}/>
                    <Button text="Delete" onClickCallback={deleteButtonCallback} style={{"backgroundColor": "#EA4444"}}/>
                </div>
            </DialogContent>
        </Dialog>
     );
 }