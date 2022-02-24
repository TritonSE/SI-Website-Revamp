/**
 * Displays individual executive members on committee page.
 *
 * @summary     Individual member display
 * @author      Navid Boloorian
 */

import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../css/ExecutiveMember.css";

export default function ExecutiveMember({ content, handleDeleteMember, index, execMemberClick }) {
    const [data, setData] = React.useState({});

    React.useEffect(async () => {
        setData(content);
    }, [content]);

    return (
        <div className="executive-item-div">
            <div
                style={{ zIndex: 10000 }}
                onClick={() => {
                    handleDeleteMember(index);
                }}
            >
                <FontAwesomeIcon icon={faTrash} className="trash-icon" />
            </div>
            <div onClick={() => execMemberClick(content, false, index)}>
                <img src={data.imageLink} />
                <div className="executive-item-text">
                    <p className="executive-item-name">{data.name}</p>
                    <p className="executive-item-role">{data.position}</p>
                </div>
            </div>
        </div>
    );
}
