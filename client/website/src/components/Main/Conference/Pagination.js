/**
 * The pagination that supplements the Stepper.
 * Takes in a prop from parent, which updates the current
 * page the pagination should be on.
 *
 * @summary     Custom Pagination
 * @author      Amitesh Sharma
 */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            marginTop: theme.spacing(2),
            width: "100%",
        },
    },
}));

export default function CustomPagination(props) {
    const classes = useStyles();

    // set the tabs for the pagination
    const count = parseInt(props.count / 10, 10) + 1;

    // updates the page the pagination should be on
    const handleChange = (e, page) => {
        props.updatePage(page);
    };
    return (
        <div className={classes.root}>
            <Pagination count={count} size="small" onChange={(e, page) => handleChange(e, page)} />
        </div>
    );
}
