/**
 * Displays News & Events Slider Item on admin tool. It is a reusable HTML object that contains all the visual representation
 * and possible actions for a single News & Events object.
 *
 * The component is designed to be customizable, allowing content to be injected in certain places
 * for individualization. It also contains callbacks for any actions chosen on that particular object, passing back
 * its unique index to the caller for easy identification.
 *
 *
 * @summary     HTML representation for a single News & Events object.
 * @author      Amrit Kaur Singh
 */

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEllipsisH } from "@fortawesome/free-solid-svg-icons";

import "../../../css/NewsEventItem.css";

/**
 *
 * All of the following params are required.
 *
 * @param {JSON} content - All information for a particular event. This will be injected in certain places.
 * @param {int} index - The index of the event that is being looked at. Useful for callback function identification.
 * @param {function} onEditCallBack - Callback function called whenever the user wants to edit this object.
 * @param {function} onDeleteCallback - Callback function called whenever the user wants to delete this object.
 *
 * @returns {HTML Object}
 */
export default function NewsEventItem({ content, index, onEditCallBack, onDeleteCallback }) {
    // formats datetime string into MM/DD/YYYY format
    const formatDate = (dateStr) => {
        let date = new Date(dateStr);
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    };

    return (
        <div className="news-events-item">
            <div className="slide-info-top">
                {/* General Information: Slide # & Title */}
                <p>
                    {" "}
                    <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                        {index + 1}. {content["title"]}{" "}
                    </span>
                </p>
                {/* Availble Actions on Item */}
                <div>
                    {/* Edit Button */}
                    <FontAwesomeIcon
                        className="slide-icon"
                        onClick={() => onEditCallBack(index)}
                        icon={faEllipsisH}
                    />
                    {/* Delete Button */}
                    <FontAwesomeIcon
                        className="slide-icon slide-icon-delete"
                        onClick={() => onDeleteCallback(index)}
                        icon={faTrashAlt}
                    />
                </div>
            </div>
            {/* Image Preview */}
            <img className="slide-img" src={content["imageLink"]} alt="Slide-Photo" />
            {/* Item Upload/Last Updated Information */}
            <p>
                {" "}
                Uploaded {formatDate(content["createdAt"])}, Last Edited{" "}
                {formatDate(content["updatedAt"])}
            </p>
        </div>
    );
}
