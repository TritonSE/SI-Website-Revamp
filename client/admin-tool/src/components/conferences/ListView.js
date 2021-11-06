import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";

const ListView = ({ items, isSlideShowImages }) => {
    console.log(items);

    const node = (title, index) => (
        <div className="listview-node">
            <p className={index}>{title}</p>
            <FontAwesomeIcon icon={faTrash} />
        </div>
    );

    if (isSlideShowImages) {
        return (
            <div>
                <div className="listview-container">
                    {items.map((item, index) => (
                        <div>{node(item.title, index)}</div>
                    ))}
                </div>

                <div className="listview-forms">
                    <Button />
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="listview-container">
                {items.map((item, index) => (
                    <div>{node(item.title, index)}</div>
                ))}
            </div>

            <div className="listview-forms">
                <Button />
            </div>
        </div>
    );
};

export default ListView;
