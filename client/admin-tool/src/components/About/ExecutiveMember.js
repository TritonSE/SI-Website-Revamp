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
                <img src="https://static.remove.bg/remove-bg-web/3a7401e33933f092e5fea5ef460b0cfd79d85fe8/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png" />
                <div className="executive-item-text">
                    <p className="executive-item-name">{data.name}</p>
                    <p className="executive-item-role">{data.position}</p>
                </div>
            </div>
        </div>
    )
}