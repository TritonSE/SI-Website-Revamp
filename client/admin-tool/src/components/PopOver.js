/**
 * Reusable pop-over for any additional information to show to the user, that needs
 * to be initially hidden.
 *
 * By default, it is rendered as a circular info icon that upon click, will give a little pop-over
 * of the additional information that is to be shown. The popover information is absolutately positioned,
 * and can be clicked away.
 *
 *
 * @summary Customizable PopOver Info Icon
 * @author  Amrit Singh
 */
import React from "react";

import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

import "../css/Popover.css";

/**
 * All params are required.
 * @param {Html} children - Represents any content information you want to put on the popover (will appear on click)
 * @returns
 */
export default function SectionPopover({ children }) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

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
                    vertical: "bottom",
                    horizontal: "left",
                }}
            >
                <Typography sx={{ p: 2 }}>{children}</Typography>
            </Popover>
        </div>
    );
}
