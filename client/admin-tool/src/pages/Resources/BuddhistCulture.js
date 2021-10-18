import React, { useState } from "react";
import TextEditor from "../../components/TextEditor";

export default function BuddhistCulture() {
    const [html, setHTML] = useState("");

    return (
        <div>
            <p> This is the BuddhistCulture Page </p>
            <TextEditor update={setHTML} />
            <p>{html}</p>
        </div>
    );
}
