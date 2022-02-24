/**
 * Displays the Branches and Chapters page on the admin tool. It allows the user to view and modify all the
 * current branches and chapters that are in the database as well as add new branches/chapters as necessary.
 *
 * All server requests are made in a separate file that is imported for east access
 *
 * @summary Branches and Chapters Page
 * @author Navid Boloorian
 * @author Jacob Au
 */

import React from "react";
import BranchesChaptersWrapper from "../../components/Home/BranchesChapters/BranchesChaptersWrapper";
import {
    putBranchChapters,
    postBranchChapters,
    getBranchChapters,
    deleteBranchChapters,
} from "../../util/requests/Home/BranchesChapters";

export default function BranchesChapters() {
    return (
        <BranchesChaptersWrapper
            pageTitle="Branch Chapters"
            getItemsRequestCallback={getBranchChapters}
            addItemRequestCallback={postBranchChapters}
            updateItemRequestCallback={putBranchChapters}
            deleteItemRequestCallback={deleteBranchChapters}
        />
    );
}
