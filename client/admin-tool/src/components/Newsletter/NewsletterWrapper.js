import React from "react";
import {Snackbar} from "@material-ui/core";

import Stepper from "../Stepper";
import NewsletterItem from "./NewsletterItem";

import "../../css/NewsletterWrapper.css";

export default function NewsletterWrapper() {
    const [newsletters, setNewsletters] = React.useState([]);
    const [currentIndex, setIndex] = React.useState(-1);
    const [isPageLoading, setIsPageLoading] = React.useState(true);

    const [snackbar, handleSnackbar] = React.useState({
        open: false,
        message: "",
    });

    /** Functions */
    const refreshNewsletters = async () => {
        setIsPageLoading(true);
    };

    return (
        <NewsletterItem />
    )
}