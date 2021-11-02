import React from "react";
import NewsEventInfoDialogue from "./NewsEventInfoDialogue";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

import "../../../css/NewsEventItem.css";

export default function NewsEventItem({ content, index, onEditCallBack, onDeleteCallback }) {
    const formatDate = (dateStr) => {
        let date = new Date(dateStr);
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    };

    return (
        <div className="news-events-item">
            <div className="slide-info-top">
                <p>
                    {" "}
                    {index + 1}. {content["title"]}{" "}
                </p>
                <div>
                    <FontAwesomeIcon
                        className="slide-icon"
                        onClick={() => onEditCallBack(index)}
                        icon={faPencilAlt}
                    />
                    <FontAwesomeIcon
                        className="slide-icon"
                        onClick={() => onDeleteCallback(index)}
                        icon={faTrashAlt}
                    />
                </div>
            </div>
            <img
                className="slide-img"
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-182880589-1493334765.jpg"
                alt="Slide-Photo"
            />
            <p> Uploaded on {formatDate(content["createdAt"])}</p>
        </div>
    );
}
