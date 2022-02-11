import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../css/ExecutiveMember.css";

export default function ExecutiveMember({
    content,
}) {
    const [data, setData] = React.useState({});

    React.useEffect(async () => {
        setData(content);
    }, [content]);

    return (
        <div className="executive-item-div">
            <div>
                <FontAwesomeIcon
                    icon={faTrash}
                    className="trash-icon"
                />
                <img src={data.imageLink} />
                <div className="executive-item-text">
                    <p className="executive-item-name">{data.name}</p>
                    <p className="executive-item-role">{data.position}</p>
                </div>
            </div>
        </div>
    )
}