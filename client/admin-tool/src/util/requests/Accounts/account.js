/**
 * Contains any server calls made for the News & Events page on the admin tool.
 */

 const config = require("../../../config");

 const BACKEND_URL = config.backend.uri;

 export const registerUser = async (content) => {
     try {
         const res = await fetch(`${BACKEND_URL}adminAccounts/register/`, {
             method: "post",
             headers: {
                 "content-type": "application/json",
             },
             body: JSON.stringify(content),
         });
         
         return res;
 
         // fetch fails
     } catch {
         return false;
     }
 };