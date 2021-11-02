import React, { useState } from "react";
import Stepper from "../../components/Stepper";

import "../../css/OrdinationIssue.css";

export default function OrdinationIssue() {
    const users = [
        { a: "Conference number #13131", feature: true },
        { a: "Conference number #2", feature: true },
        { a: "Conference number #3", feature: true },
        { a: "Conference number #6", feature: false },
        { a: "Conference number #10", feature: false },
        { a: "Conference number #27", feature: false },
        { a: "Conference number #18", feature: true },
        { a: "Conference number #25", feature: false },
        { a: "Conference number #19", feature: false },
        { a: "Conference number #20", feature: false },
        { a: "Conference number #212", feature: true },
        { a: "Conference number #1345", feature: false },
        { a: "Conference number #22323", feature: false },
    ];
    const [index, setIndex] = useState(0);
    const handleNodeClick = (ind) => {
        setIndex(ind);
    };
    const addNewNode = (list) => {
        alert("Add New Clicked");
        console.log(list);
    };
    const formatNodeTitle = (item) => item.a;

    const addSpecialNodeClass = (item) => {
        if (item.feature) return "orange-border";
        return "";
    };

    return (
        <div>
            <p> This is the Ordination Issue Page </p>
            <Stepper
                displayItems={users}
                handleNodeClick={handleNodeClick}
                // addButtonTitle="Add new"
                // numItemsPerPage ={5}
                handleAddNodeClick={addNewNode}
                formatNodeTitle={formatNodeTitle}
                addSpecialNodeClass={addSpecialNodeClass}
            />
            {`${users[index].a} `}
        </div>
    );
}
