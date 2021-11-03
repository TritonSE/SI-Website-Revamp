import React from "react";

import NewsEventItem from "../../components/Home/NewsEventsSlider/NewsEventItem";
import NewsEventInfoDialogue from "../../components/Home/NewsEventsSlider/NewsEventInfoDialogue";
import Button from "../../components/Button";
import "../../css/NewsEventsSlider.css";

export default function NewsEventsSlider() {
    const [isInfoDialogueOpen, handleInfoDialogueOpen] = React.useState(false);
    const [slideIndex, changeSlideIndex] = React.useState(0);

    const handleClick = () => {};

    const data = [
        {
            id: 1,
            title: "Rally",
            description: "",
            imageLink: "https://en.wikipedia.org/wiki/Davika_Hoorne",
            redirectLink: "https://en.wikipedia.org/wiki/Davika_Hoorne",
            openInSameTab: true,
            createdAt: "2021-11-02T11:29:35.000Z",
            updatedAt: "2021-11-02T11:29:35.000Z",
        },
        {
            id: 2,
            title: "Reunion",
            description: "Some event",
            imageLink: "https://en.wikipedia.org/wiki/Taylor_Hill_(model)",
            redirectLink: "https://en.wikipedia.org/wiki/Taylor_Hill_(model)",
            openInSameTab: true,
            createdAt: "2021-11-02T11:29:35.000Z",
            updatedAt: "2021-11-02T11:29:35.000Z",
        },
        {
            id: 3,
            title: "Gathering",
            description: "Some event",
            imageLink: "https://en.wikipedia.org/wiki/Romee_Strijd",
            redirectLink: "https://en.wikipedia.org/wiki/Romee_Strijd",
            openInSameTab: false,
            createdAt: "2021-11-02T11:29:35.000Z",
            updatedAt: "2021-11-02T11:29:35.000Z",
        },
        {
            id: 4,
            title: "Meetup",
            description: "",
            imageLink: "https://en.wikipedia.org/wiki/Barbara_Palvin",
            redirectLink: "https://en.wikipedia.org/wiki/Barbara_Palvin",
            openInSameTab: false,
            createdAt: "2021-11-02T11:29:35.000Z",
            updatedAt: "2021-11-02T11:29:35.000Z",
        },
    ];

    const onEditCallback = (index) => {
        // alert(`Edit: ${index}`);
        changeSlideIndex(index);
        handleDialogueOpen();
    };

    const onDeleteCallback = (index) => {
        alert(`Delete: ${index}`);
    };

    const deleteModalNegativeButtonClickCallback = () => {};

    const deleteModalPositiveButtonClickCallback = () => {};

    const handleDialogueOpen = () => {
        handleInfoDialogueOpen(true);
    };

    const handleDialogueClose = () => {
        handleInfoDialogueOpen(false);
    };

    return (
        <div id="news-events-slider">
            <h1> News & Events Slider </h1>
            <Button text="Post" onClickCallback={handleClick} />
            <div id="news-events-grid">
                {data.map((slideInfo, i) => {
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
            <NewsEventInfoDialogue onClickCallback={handleClick} open={isInfoDialogueOpen} handleClose={handleDialogueClose} content={data[slideIndex]} index={slideIndex} />
            {/* <Modal
                open={true}
                negativeButtonText="Cancel"
                positiveButtonText="Delete"
                negativeButtonClickCallBack={deleteModalNegativeButtonClickCallback}
                positiveButtonClickCallBack={deleteModalPositiveButtonClickCallback}
            /> */}
        </div>
    );
}
