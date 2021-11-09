import React from "react";

import SectionWrapper from "../../components/Section/SectionWrapper";
import {
    fetchSectionsForPage,
    addSection,
    deleteSection,
    updateSection,
} from "../../util/requests/Sections";

export default function AddSection() {

    return (
        <SectionWrapper
        PAGE="Home"
        pageTitle="Home: Sections"
        getItemsRequestCallback={fetchSectionsForPage}
        addItemRequestCallback={addSection}
        deleteItemRequestCallback={deleteSection}
        updateItemRequestCallback={updateSection}
        />
    );
}
