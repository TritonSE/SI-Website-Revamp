import React from "react";

import NewsEventItem from "../../components/Home/NewsEventsSlider/NewsEventItem";
import NewsEventInfoDialogue from "../../components/Home/NewsEventsSlider/NewsEventInfoDialogue";
import DeleteModal from "../../components/DeleteModal";
import Loader from "../../components/Loader";
import { fetchNewsEvents, updateNewsEvent, deleteNewsEvent, addNewsEvent } from "../../util/requests/Home/NewsEventsSlider";
import "../../css/NewsEventsSlider.css";

export default function NewsEventsSlider() {
    const [newsEventsItems, updateNewsEventsItems] = React.useState([]);
    const [isInfoDialogueOpen, handleInfoDialogueOpen] = React.useState(false);
    const [isDeleteModalOpen, showDeleteModal] = React.useState(false);
    const [slideIndex, changeSlideIndex] = React.useState(-1);

    const [isPageLoading, setIsPageLoading] = React.useState(true);

    const formatDeleteConfirmStr = () => {
        return `Slide ${slideIndex + 1}: ${newsEventsItems[slideIndex]["title"]}`;
    }

    React.useEffect(async () => {
        await refreshNewsEvents();
    }, []);

    const refreshNewsEvents = async () => {
        setIsPageLoading(true);
        changeSlideIndex(-1);
        const data = await fetchNewsEvents();
        updateNewsEventsItems(data);
        setIsPageLoading(false);
    }

    const onEditCallback = (index) => {
        changeSlideIndex(index);
        handleDialogueOpen();
    };

    const onDeleteCallback = (index) => {
        changeSlideIndex(index);
        handleDeleteModalOpen();
    };

    const handleSlideAddRequest = async (content) => {
        handleDialogueClose();
        const isAddSuccessful = await addNewsEvent(content);
        if(isAddSuccessful) await refreshNewsEvents(); 
    };

    const handleSlideUpdateRequest = async (content) => {
        handleDialogueClose();
        const isUpdateSuccessful = await updateNewsEvent(newsEventsItems[slideIndex]["id"], content);
        if(isUpdateSuccessful) await refreshNewsEvents(); 
    };

    const handleSlideDeleteRequest = async () => {
        handleDeleteModalClose();
        const isDeleteSuccessful = await deleteNewsEvent(newsEventsItems[slideIndex]["id"]);
        if(isDeleteSuccessful) await refreshNewsEvents(); 
    }

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

    if(isPageLoading){
        return (
            <div id="news-events-slider">
                <h1> News & Events Slider </h1>
                <div className="loader-wrapper">
                    <Loader/>
                </div>
            </div>
        );
    }
    else {
        return (
            <div id="news-events-slider">
                <h1> News & Events Slider </h1>      
                <div id="news-events-grid">
                    {newsEventsItems.map((slideInfo, i) => {
                        return (
                            <NewsEventItem
                                content={slideInfo}
                                index={i}
                                onEditCallBack={onEditCallback}
                                onDeleteCallback={onDeleteCallback}
                            />
                        );
                    })}
                </div>
                <NewsEventInfoDialogue buttonClickCallBack={handleSlideUpdateRequest} open={isInfoDialogueOpen} handleClose={handleDialogueClose} content={slideIndex > -1 ? newsEventsItems[slideIndex]: {}} index={slideIndex} />
                <DeleteModal open={isDeleteModalOpen} handleClose={handleDeleteModalClose} deleteButtonCallback={handleSlideDeleteRequest} itemToBeDeletedTxt={slideIndex > -1 ? formatDeleteConfirmStr(): null}/>
            </div>
        );
    }
}
