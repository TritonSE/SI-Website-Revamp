import React from "react";
import ResourcesHeader from "../components/ResourcesHeader";

import Header from "../media/Lotus_Header.png";

export default function Custom404() {
    return (
        <div>
            <ResourcesHeader
                title="404"
                text="Page Not Found"
                image={Header}
                height="max(75vh, 400px)"
                width="100%"
                showArrow={false}
            />
        </div>
    );
}
