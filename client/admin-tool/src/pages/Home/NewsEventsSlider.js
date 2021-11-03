/**
 * Displays News & Events Slider page on admin tool. It shows all news & events currently stored in the database, and
 * gives functionality to edit or delete an existing event, or create a new event. This utilizes multiple helper
 * components, but this file is the central 'caller' file for all subcomponents.
 *
 * The add/edit functionality is aided using the NewsEventInfoDialogue component. The delete functionality
 * is aided using the DeleteModal component. The individual events and their actions are formatted using
 * the NewsEventItem component.
 *
 * All server requests are made in a seperate file, but are imported here for easy usage.
 *
 *
 * @summary     Displays News & Events Slider.
 * @author      Amrit Kaur Singh
 */

import React from "react";

import { Snackbar } from "@material-ui/core";

import NewsEventItem from "../../components/Home/NewsEventsSlider/NewsEventItem";
import NewsEventInfoDialogue from "../../components/Home/NewsEventsSlider/NewsEventInfoDialogue";
import DeleteModal from "../../components/DeleteModal";
import AddButton from "../../components/AddButton";
import Loader from "../../components/Loader";

import {
    fetchNewsEvents,
    updateNewsEvent,
    deleteNewsEvent,
    addNewsEvent,
} from "../../util/requests/Home/NewsEventsSlider"; // server calls

import "../../css/NewsEventsSlider.css";

export default function NewsEventsSlider() {
    const [newsEventsItems, updateNewsEventsItems] = React.useState([]); // tracks news & events JSON objects
    const [isInfoDialogueOpen, handleInfoDialogueOpen] = React.useState(false); // controls display of dialogue for add/edit event
    const [isDeleteModalOpen, showDeleteModal] = React.useState(false); // controls display of modal for delete event
    const [slideIndex, changeSlideIndex] = React.useState(-1); // tracks which event's information is being shown (-1 means a new event is being created)

    const [isPageLoading, setIsPageLoading] = React.useState(true); // tracks whether server information has been received
    // display any error messages to user
    const [snackbar, handleSnackBar] = React.useState({
        open: false, // whether to show message
        message: "", // what message to show
    });

    const formatDeleteConfirmStr = () =>
        `Slide ${slideIndex + 1}: ${newsEventsItems[slideIndex]["title"]}`;

    /** Dialogue & Modal Visibility Controls */

    const handleDeleteModalOpen = () => {
        showDeleteModal(true);
    };

    const handleDeleteModalClose = () => {
        showDeleteModal(false);
    };

    const handleDialogueOpen = () => {
        handleInfoDialogueOpen(true);
    };

    const handleDialogueClose = () => {
        handleInfoDialogueOpen(false);
    };

    /** News & Event Action Callbacks */

    // Edit icon is clicked
    const onEditCallback = (index) => {
        changeSlideIndex(index);
        handleDialogueOpen();
    };

    // Delte icon is clicked
    const onDeleteCallback = (index) => {
        changeSlideIndex(index);
        handleDeleteModalOpen();
    };

    /** Server Requests  */

    // fetch events
    const refreshNewsEvents = async () => {
        setIsPageLoading(true);
        changeSlideIndex(-1);
        const data = await fetchNewsEvents();
        updateNewsEventsItems(data);
        setIsPageLoading(false);
    };

    // add new event
    const handleSlideAddRequest = async (content) => {
        handleDialogueClose();
        const isAddSuccessful = await addNewsEvent(content);
        if (isAddSuccessful) await refreshNewsEvents();
        else
            handleSnackBar({
                message: "Error: Internal servor error. Your request could not be completed.",
                open: true,
            });
    };

    // update an existing event
    const handleSlideUpdateRequest = async (content) => {
        handleDialogueClose();
        const isUpdateSuccessful = await updateNewsEvent(
            newsEventsItems[slideIndex]["id"],
            content
        );
        if (isUpdateSuccessful) await refreshNewsEvents();
        else
            handleSnackBar({
                message: "Error: Internal servor error. Your request could not be completed.",
                open: true,
            });
    };

    // delete an existing event
    const handleSlideDeleteRequest = async () => {
        handleDeleteModalClose();
        const isDeleteSuccessful = await deleteNewsEvent(newsEventsItems[slideIndex]["id"]);
        if (isDeleteSuccessful) await refreshNewsEvents();
        else
            handleSnackBar({
                message: "Error: Internal servor error. Your request could not be completed.",
                open: true,
            });
    };

    /** Add Button  */

    const handleAddButtonClick = () => {
        changeSlideIndex(-1); // -1 indicates special state: new event creation (or attempt)
        handleInfoDialogueOpen(true);
    };

    /** Initialization  */

    // fetches server data upon component mount
    React.useEffect(async () => {
        await refreshNewsEvents();
    }, []);

    // special display while fetch calls are made to server
    if (isPageLoading) {
        return (
            <div id="news-events-slider">
                <h1> News & Events Slider </h1>
                <div className="loader-wrapper">
                    <Loader />
                </div>
            </div>
        );
    }

    // general display once server calls are done
    return (
        <div id="news-events-slider">
            <h1> News & Events Slider </h1>
            {/* Add Button   */}
            <AddButton onClickCallback={handleAddButtonClick} />
            {newsEventsItems.length > 0 ? (
                // Display News & Events in a grid format (at least 1 found)
                <div id="news-events-grid">
                    {newsEventsItems.map((slideInfo, i) => (
                        <NewsEventItem
                            content={slideInfo}
                            index={i}
                            onEditCallBack={onEditCallback}
                            onDeleteCallback={onDeleteCallback}
                        />
                    ))}
                </div>
            ) : (
                // Special message (no News & Events found)
                <div className="no-events-available">
                    {" "}
                    <br /> <br />
                    <br /> There are no News & Events Available.
                </div>
            )}

            {/* Add/Edit Event Dialogue  */}
            {slideIndex > -1 ? (
                // Update An Existing Event
                <NewsEventInfoDialogue
                    buttonText="Update"
                    buttonClickCallBack={handleSlideUpdateRequest}
                    open={isInfoDialogueOpen}
                    handleClose={handleDialogueClose}
                    content={newsEventsItems[slideIndex]}
                    index={slideIndex}
                />
            ) : (
                // Add A New Event
                <NewsEventInfoDialogue
                    buttonText="Post"
                    buttonClickCallBack={handleSlideAddRequest}
                    open={isInfoDialogueOpen}
                    handleClose={handleDialogueClose}
                    content={{}}
                    index={newsEventsItems.length}
                />
            )}

            {/* Delete Modal  */}
            <DeleteModal
                open={isDeleteModalOpen}
                handleClose={handleDeleteModalClose}
                deleteButtonCallback={handleSlideDeleteRequest}
                itemToBeDeletedTxt={slideIndex > -1 ? formatDeleteConfirmStr() : null}
            />

            {/* Snackbar for Error Displays */}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={() => handleSnackBar({ ...snackbar, open: false })}
                message={snackbar.message}
            />
        </div>
    );
}
