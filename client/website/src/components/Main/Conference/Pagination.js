import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function CustomPagination(props) {
    const classes = useStyles();
    const count = parseInt(props.count / 10, 10) + 1;

    const handleChange = (e, page) => {
        props.updatePage(page);
    };
    return (
        <div className={classes.root}>
            <Pagination
                count={count}
                size="small"
                color="#6652A0"
                onChange={(e, page) => handleChange(e, page)}
            />
        </div>
    );
}
