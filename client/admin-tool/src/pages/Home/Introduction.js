import React from "react";

import Stepper from "../../components/Stepper";
import SectionItem from "../../components/SectionItem";

import "../../css/Introduction.css";

export default function Introduction() {

    const [currentIndex, setIndex] = React.useState(0);

    const sections = [
        {
            "id": 2,
            "page": "Home",
            "title": "Introduction",
            "content": "<p>https://en.wikipedia.org/wiki/Barbara_Palvin</p>",
            "isPublished": true,
            "createdAt": "2021-11-03T11:53:32.000Z",
            "updatedAt": "2021-11-03T11:53:32.000Z"
        },
        {
            "id": 3,
            "page": "Home",
            "title": "Lifestyle & Devotion ",
            "content": "<p>https://en.wikipedia.org/wiki/Random_Person</p>",
            "isPublished": false,
            "createdAt": "2021-11-03T11:53:32.000Z",
            "updatedAt": "2021-11-03T11:53:32.000Z"
        }
    ];

    const handleNodeClick = (ind) => {
        setIndex(ind);
    };
    const addNewNode = () => {
        setIndex(-1);
    };
    const formatNodeTitle = (section) => section.title;

    const addSpecialNodeClass = (section) => {
        if (section.isPublished) return "orange-border";
        return "";
    };

    const handleDelete = () => console.log();

    const handleUpdateSection = (data) => {
        alert(JSON.stringify(data));
    }

    const handleAddSection = (data) => {
        alert(JSON.stringify(data));
    }

    return (
        <div className="sections-main-wrapper">
            <h1> Sections </h1>
             <div className="sections-container">
                <Stepper
                    displayItems={sections}
                    startingIndex={0}
                    handleNodeClick={handleNodeClick}
                    handleAddNodeClick={addNewNode}
                    formatNodeTitle={formatNodeTitle}
                    addSpecialNodeClass={addSpecialNodeClass}
                />
                {/* {`${sections[index].title} `} */}
                <div className="section-item-wrapper">
                    {
                        currentIndex > -1 ?
                        // update section
                        <SectionItem  content={sections[currentIndex]} onDeleteCallback={handleDelete} onSaveCallback={handleUpdateSection}/>
                        :
                        // add new section
                        <SectionItem content={{content: "<p></p>"}} onDeleteCallback={handleDelete} onSaveCallback={handleAddSection}/>
                    }
                </div>
            </div>
        </div>
    );
}
