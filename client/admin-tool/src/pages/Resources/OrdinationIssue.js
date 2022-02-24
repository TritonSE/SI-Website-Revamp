import React from "react";

import SectionWrapper from "../../components/Section/SectionWrapper";
import {
    fetchSectionsForPage,
    addSection,
    deleteSection,
    updateSection,
} from "../../util/requests/Sections";

export default function OrdinationIssue() {
    return (
        <SectionWrapper
            PAGE="OrdinationIssue"
            pageTitle="Ordination Issue"
            getItemsRequestCallback={fetchSectionsForPage}
            addItemRequestCallback={addSection}
            deleteItemRequestCallback={deleteSection}
            updateItemRequestCallback={updateSection}
        />
    );
}
