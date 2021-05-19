import React from "react";
import Button from '@material-ui/core/Button';
import "../css/CustomButton.css";
 
 export default function CustomButton({ text, redirect_link, openInSameTab }) {
    
     return (
        <Button
         href={redirect_link}
         target={openInSameTab ? null:"_blank"}
         rel="noreferrer noopener"
         variant="contained" 
         size="large" 
         className="Custom-Button">
            {text}
        </Button>
     );
 }