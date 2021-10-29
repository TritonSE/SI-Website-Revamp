/**
 * The Stepper is a reusable component that is used for
 * navigating the items for each page such as conferences,
 * buddhist tradition, and newsletters
 *
 * It takes in the following props:
 *
 * Required props:
 *  - items  - the array of items for the  specific page
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
 *  - buttonTitle - A string to indicate the title for the 'add' button
 *                  defaults to "Add new" if no prop is passed in
 *  - numItemsPerPage - A number to indicate how many items to show per page
 *
 * @summary     Stepper component
 * @author      Amitesh Sharma
 */

import React, { useState, useEffect } from "react";
import { PaginatedList } from "react-paginated-list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../css/Stepper.css";

const Stepper = (props) => {
    // the state of the items
    const [items, setItems] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    // determine the title of the button
    const buttonTitle = props.buttonTitle ? props.buttonTitle : "Add new";
    // determine the number of items per page
    const numItemsPerPage = props.numberPerPage ? props.numberPerPage : 10;

    // Calls whenever the prop for items changes in the parent
    useEffect(() => {
        setItems(props.items);
    }, []);

    const onPageChange = (itemList, currentPage) => {
        setPageNumber(currentPage - 1);
    };

    // The "+" icon on the 'add' button
    const addIcon = <FontAwesomeIcon icon={faPlus} style={{ marginRight: "10px" }} />;

    return (
        <div className="stepper-component">
            {/* The add button at the top of the stepper */}
            <button
                type="button"
                className="add-stepper-button"
                onClick={() => props.handleAddNodeClick(items)}
            >
                {addIcon} {buttonTitle}
            </button>
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
                                className="stepper-item-div"
                                onClick={() => props.handleNodeClick(pageNumber * 10 + index)}
                                // required for accessibility reasons
                                onKeyDown={(event) => {
                                    if (event.code === 13) {
                                        props.handleNodeClick(pageNumber * 10 + index);
                                    }
                                }}
                            >
                                <p>{props.formatNodeTitle(item)}</p>
                            </div>
                        ))}
                    </>
                )}
            />
        </div>
    );
};

export default Stepper;
