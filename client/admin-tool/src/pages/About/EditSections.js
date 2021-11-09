import React from "react";

import SectionWrapper from "../../components/Section/SectionWrapper";
import {
    fetchSectionsForPage,
    addSection,
    deleteSection,
    updateSection,
} from "../../util/requests/Sections";

export default function EditSections() {

    return (
        <SectionWrapper
        PAGE="AboutUs"
        pageTitle="About Us: Sections"
        getItemsRequestCallback={fetchSectionsForPage}
        addItemRequestCallback={addSection}
        deleteItemRequestCallback={deleteSection}
        updateItemRequestCallback={updateSection}
        />
    );
}