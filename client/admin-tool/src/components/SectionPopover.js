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

import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import "../css/SectionPopover.css";
 
 /**
  *
  * @param {string} text - Button content as it will be shown to the user
  * @param {function} onClickCallback - Function will be callbacked whenever the button is clicked
  * @param {JSON} style - Any in-line css customizations on the button
  * @returns
  */
 export default function SectionPopover({children}) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
        <FontAwesomeIcon
                        aria-describedby={id}
                        onClick={handleClick}
                        icon={faInfoCircle}
                        className="section-popover-icon"
           />
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
            }}
        >
            <Typography sx={{ p: 2 }}>
                {children}
            </Typography>
        </Popover>
        </div>
    );
 }
 