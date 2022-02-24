/**
 * The Stepper is a reusable component that is used for
 * navigating the items for each page such as conferences,
 * buddhist tradition, and newsletters
 *
 * It takes in the following props:
 *
 * Required props:
 *  - displayItems  - the array of items for the  specific page
 *  - handleAddNodeclick - A function fired when the 'add' button is clicked
 *      - Parameters: items
 *      - items - array - the list of items for the specific page
 *  - handleNodeClick - A function fired when a node is clicked
 *      - Parameters: index
 *      - index - number - the index of the item clicked inside items
 *  - formatNodeTitle - A string formatter for the title of the node
 *      - Parameters: item
 *      - item - object - an item inside items that can be used to determine the title
 *
 * Non-required props:
 *  - addButtonTitle - A string to indicate the title for the 'add' button
 *                  defaults to "Add new" if no prop is passed in
 *  - numItemsPerPage - A number to indicate how many items to show per page
 *  - addSpecialNodeClass - A function that passes back the item, and checks if that item should have a special class attached to it. Expects a string return representing the class to add.
 *
 * @summary     Stepper component
 * @author      Amitesh Sharma
 */

import React, { useState, useEffect } from "react";
import { PaginatedList } from "react-paginated-list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import AddButton from "./AddButton";
import "../css/Stepper.css";

const Stepper = ({
    displayItems,
    handleNodeClick,
    addButtonTitle = "Add New",
    handleAddNodeClick,
    formatNodeTitle,
    addSpecialNodeClass = (item) => {
        return "";
    },
    numItemsPerPage = 10,
}) => {
    // the state of the items
    const [items, setItems] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    // keep track of the index of node to set active
    const [indexButton, setIndexButton] = useState(undefined);
    // this is needed for highlighting the proper node even when page changes
    const [activeItem, setActiveItem] = useState(undefined);

    // Calls whenever the prop for items changes in the parent
    useEffect(() => {
        setItems(displayItems);
        setIndexButton("button");
    }, []);

    const onPageChange = (itemList, currentPage) => {
        setPageNumber(currentPage - 1);
    };

    /**
     * Handle the onClick of a node inside the item itemList
     *
     * @param {number} index - the index of the node clicked
     * @param {object} item - the current item in the data list
     */
    const onNodeClick = (index, item) => {
        handleNodeClick(pageNumber * numItemsPerPage + index);
        // set the current index of the node
        setIndexButton(index);
        // remember the current active item
        setActiveItem(item);
    };

    // determine the class for the node (active vs normal)
    const determineClassname = (index, item) =>
        index !== indexButton || item !== activeItem
            ? `stepper-item-div ${addSpecialNodeClass(item)}`
            : `stepper-item-div active ${addSpecialNodeClass(item)}`;

    return (
        <div className="stepper-component">
            {/* The add button at the top of the stepper */}
            <AddButton
                text={addButtonTitle}
                className={indexButton === -1 ? "active-btn" : null}
                onClickCallback={() => {
                    handleAddNodeClick();
                    setIndexButton(-1);
                }}
            />
            <PaginatedList
                list={items}
                itemsPerPage={numItemsPerPage}
                paginatedListContainerClass="pagination-container"
                controlClass="pagination-box"
                activeControlClass="active-pagination-box"
                onPageChange={onPageChange}
                nextText={
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ paddingTop: "3px", marginRight: "5px" }}
                    />
                }
                prevText={<FontAwesomeIcon icon={faArrowLeft} style={{ paddingTop: "3px" }} />}
                renderList={(list) => (
                    // The node component inside the list
                    <>
                        {list.map((item, index) => (
                            <div
                                role="button"
                                tabIndex={index}
                                className={determineClassname(index, item)}
                                onClick={() => onNodeClick(index, item)}
                                // required for accessibility reasons
                                onKeyDown={(event) => {
                                    if (event.code === 13) {
                                        onNodeClick(index);
                                    }
                                }}
                            >
                                <p>{formatNodeTitle(item)}</p>
                            </div>
                        ))}
                    </>
                )}
            />
        </div>
    );
};

export default Stepper;
