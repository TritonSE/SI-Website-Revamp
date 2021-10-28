import React, { useState } from "react";
import Stepper from "../../components/Stepper";

export default function OrdinationIssue() {
    const users = [
        { a: "Conference number #13131" },
        { a: "Conference number #2" },
        { a: "Conference number #3" },
        { a: "Conference number #6" },
        { a: "Conference number #10" },
        { a: "Conference number #2" },
        { a: "Conference number #1" },
        { a: "Conference number #2" },
        { a: "Conference number #1" },
        { a: "Conference number #2" },
        { a: "Conference number #2" },
        { a: "Conference number #1" },
        { a: "Conference number #2" },
    ];
    const [index, setIndex] = useState(0);
    const handleNodeClick = (ind) => {
        setIndex(ind);
    };
    const addNewNode = (list) => {
        console.log(list);
    };
    const formatNodeTitle = (item) => item.a;

    return (
        <div>
            <p> This is the Ordination Issue Page </p>
            <Stepper
                items={users}
                handleNodeClick={handleNodeClick}
                buttonTitle="Add new"
                handleAddNodeClick={addNewNode}
                formatNodeTitle={formatNodeTitle}
            />
            {`${users[index].a} `}
        </div>
    );
}
