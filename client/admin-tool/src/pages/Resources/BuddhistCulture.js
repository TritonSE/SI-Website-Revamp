import React, { useState } from "react";
import TextEditor from "../../components/TextEditor";
import AddButton from "../../components/AddButton";

export default function BuddhistCulture() {
    const [html, setHTML] = useState("");

    return (
        <div style={{ marginLeft: "60px" }}>
            <p> This is the BuddhistCulture Page </p>
            <TextEditor editorUpdateCallback={setHTML} />
            <p style={{ maxWidth: "60vw" }}>{html}</p>
            <AddButton
                onClickCallback={() => {
                    alert("Click");
                }}
            />
        </div>
    );
}
