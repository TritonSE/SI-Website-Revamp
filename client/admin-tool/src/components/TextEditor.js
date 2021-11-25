/**
 * The Text Editor is a reusable component that is used for
 * adding/updating information from the admin side.
 *
 * It takes in the following props:
 *  - editorUpdateCallback - a function that updates the parent state when
 *             user is ready to add/update data to database
 *  - initialHtmlLoadStr - a string of html that is used to load into the
 *           editor state
 *
 * @summary     Text Editor
 * @author      Amitesh Sharma
 */

import React, { useState, useEffect } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
// import DOMPurify from 'dompurify';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import "../css/TextEditor.css";

const TextEditor = ({ editorUpdateCallback, initialLoadEditorState }) => {
    // initialize the editor state
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    /**
     * Handle any changes inside the editor
     * @param {HTML} state - the current HTML layout inside the editor
     */
    const handleEditorChange = (state) => {
        setEditorState(state);
        editorUpdateCallback(state);
    };

    // If an editorState is passed in, then set the Editor to this state
    useEffect(() => {
        setEditorState(initialLoadEditorState);
    }, [initialLoadEditorState]);

    return (
        <div className="text-editor">
            <Editor
                editorState={editorState}
                onEditorStateChange={handleEditorChange}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                toolbar={{
                    options: [
                        "inline",
                        "fontSize",
                        "fontFamily",
                        "textAlign",
                        "colorPicker",
                        "link",
                        "embedded",
                        "image",
                        "remove",
                        "history",
                    ],
                    image: {
                        defaultSize: {
                            height: "400",
                            width: "600",
                        },
                    },
                    fontFamily: {
                        options: [
                            "Arial",
                            "Georgia",
                            "Impact",
                            "Tahoma",
                            "Times New Roman",
                            "Verdana",
                            "Libre Baskerville",
                            "Nunito",
                        ],
                    },
                }}
            />
        </div>
    );
};

export default TextEditor;
