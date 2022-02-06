import React from "react";
import { TextField, Snackbar, MenuItem } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "../../components/Button";
import EPublicationItem from "../../components/EPublications/EPublicationItem";

import "../../css/EPublications.css";

export default function EPublications() {
    return (
        <div className="EPublications">
            <EPublicationItem />
        </div>
    );
}