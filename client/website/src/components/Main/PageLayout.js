import React from "react";

import NavBar from "./NavBar";
import Footer from "./Footer";

export default function PageLayout(props) {
    return (
        <body>
            {/* minheight ensures footer is always at the bottom of the page */}
            <div style={{ minHeight: "calc(100vh - 375px)" }}>
                <NavBar />
                {props.children}
            </div>
            <Footer />
        </body>
    );
}
