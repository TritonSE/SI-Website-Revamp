import React from "react";

import SectionWrapper from "../../components/Section/SectionWrapper";
import {
    fetchSectionsForPage,
    addSection,
    deleteSection,
    updateSection,
} from "../../util/requests/Sections";

export default function BuddhistCulture() {
    return (
        <SectionWrapper
            PAGE="BuddhistCulture"
            pageTitle="Buddhist Culture"
            getItemsRequestCallback={fetchSectionsForPage}
            addItemRequestCallback={addSection}
            deleteItemRequestCallback={deleteSection}
            updateItemRequestCallback={updateSection}
        />
    );
}
