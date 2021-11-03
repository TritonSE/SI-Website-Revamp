import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEllipsisH } from "@fortawesome/free-solid-svg-icons";

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
                    <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                        {index + 1}. {content["title"]}{" "}
                    </span>
                </p>
                <div>
                    <FontAwesomeIcon
                        className="slide-icon"
                        onClick={() => onEditCallBack(index)}
                        icon={faEllipsisH}
                    />
                    <FontAwesomeIcon
                        className="slide-icon slide-icon-delete"
                        onClick={() => onDeleteCallback(index)}
                        icon={faTrashAlt}
                    />
                </div>
            </div>
            <img className="slide-img" src={content["imageLink"]} alt="Slide-Photo" />
            <p>
                {" "}
                Uploaded {formatDate(content["createdAt"])}, Last Edited{" "}
                {formatDate(content["updatedAt"])}
            </p>
        </div>
    );
}
