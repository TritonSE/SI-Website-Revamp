/**
 * The Text Editor is a reusable component that is used for
 * adding/updating information from the admin side.
 *
 * It takes in the following props:
 *  - update - a function that updates the parent state when
 *             user is ready to add/update data to database
 *
 * @summary     Text Editor
 * @author      Amitesh Sharma
 */

import React, { useState, useEffect } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
// import DOMPurify from 'dompurify';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import "../css/TextEditor.css";

const TextEditor = (props) => {
    // initialize the editor state
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
    // store the stringified html content
    const [convertedContent, setConvertedContent] = useState(null);

    /**
     * Handle any changes inside the editor
     * @param {HTML} state - the current HTML layout inside the editor
     */
    const handleEditorChange = (state) => {
        setEditorState(state);
    };

    // Converts the editor state to stringified HTML
    const convertContentToHTML = () => {
        const currentContentAsHTML = draftToHtml(convertToRaw(editorState.getCurrentContent()));
        setConvertedContent(currentContentAsHTML);
    };

    // convert to HTML whenever there is a change to the editor state
    useEffect(() => {
        convertContentToHTML();
    }, [editorState]);

    // update the parent state to hold the stringified html
    useEffect(() => {
        props.update(convertedContent);
    }, [convertedContent]);

    // const createHtml = (html) => {
    //   return  {
    //     __html: DOMPurify.sanitize(html)
    //   }
    // }

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
                }}
            />
            {/* <div className="preview" dangerouslySetInnerHTML={createHtml(convertedContent)}></div> */}
        </div>
    );
};

export default TextEditor;
