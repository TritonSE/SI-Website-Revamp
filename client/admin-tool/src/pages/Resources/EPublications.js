import React from "react";
import { TextField, Snackbar, MenuItem } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "../../components/Button";
import EPublicationItem from "../../components/EPublications/EPublicationItem";

import "../../css/EPublications.css";

import EPublicationWrapper from "../../components/EPublications/EPublicationWrapper";
import {
    fetchEPublications,
    fetchFilters,
    fetchFeatured,
    addEPublication,
    updateEPublication,
    deleteEPublication,
} from "../../util/requests/Resources/EPublications";

export default function EPublications() {
    return (
        <EPublicationWrapper
            pageTitle="Publications"
            getFilters={fetchFilters}
            fetchFeatured={fetchFeatured}
            getItemsRequestCallback={fetchEPublications}
            addItemRequestCallback={addEPublication}
            updateItemRequestCallback={updateEPublication}
            deleteItemRequestCallback={deleteEPublication}
        />
    );
}