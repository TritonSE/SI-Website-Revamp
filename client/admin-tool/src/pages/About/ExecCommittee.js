import React from "react";

import CommitteeWrapper from "../../components/About/CommitteeWrapper";

import {
    fetchCommittees,
    addCommittee,
    updateCommittee,
    deleteCommittee,
} from "../../util/requests/About/ExecCommittee";

export default function ExecCommittee() {
    return (
        <CommitteeWrapper
            pageTitle="Add Committee"
            getItemsRequestCallback={fetchCommittees}
            addItemRequestCallback={addCommittee}
            updateItemRequestCallback={updateCommittee}
            deleteItemRequestCallback={deleteCommittee}
        />
    );
}
