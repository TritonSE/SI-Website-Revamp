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

    const handleDeleteNewsletter = async () => {

    }

    const handleUpdateNewsletter = async (data) => {

    }

    const handleAddNewsletter = async (data) => {

    }

    /** Initialization */

    React.useEffect(async () => {
        await refreshNewsletters();
    }, []);

    /** Stepper */

    const handNodeClick = (index) => {
        setIndex(index);
    };

    const addNewNode = () => {
        setIndex(-1);
    };

    const formatNodeTitle = (section) => section.title;

    const addSpecialNodeClass = (section) =>  {

    };

    /** Formatting */

    const formatDate = (dateStr) => {

    };

    if (isPageLoading) {
        <div className = "newsletters-main-wrapper">
            <h1>Newsletters</h1>
        </div>
    }

    return (
        <NewsletterItem />
    )
}