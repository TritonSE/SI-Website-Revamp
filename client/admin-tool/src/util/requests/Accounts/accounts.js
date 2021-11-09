/**
 * Contains any server calls made for any of the accounts (Login, Reset Password, Register, Forgot Password) related
 * functionality on the admin tool.
 */

 const config = require("../../../config.js");
 import Cookies from 'universal-cookie';

 const BACKEND_URL = config.backend.uri;
 
 /**
  * Retrieves all news & events item from database. [] is returned if any issues occur.
  *
  * @returns { [JSON] } - Each object denotes a unique News & Event item stored in the database
  */
 export const login = async (content) => {
     try {
         const res = await fetch(`${BACKEND_URL}adminAccounts/login`, {
             method: "post",
             headers: {
                 "content-type": "application/json",
             },
             body: JSON.stringify(content),
         });
         // successfull
         if (res.ok) {
             const data = await res.json();

             return data; // returns array of JSON objects
         }
 
         // any server issue
         return null;
 
         // fetch fails
     } catch {
         return null;
     }
 };
 
 /**
  * Add a new News & Event object to the database.
  *
  * @param { JSON } content - Object to add. Must conform to model schema
  *
  * @returns { boolean } - True if successful, false otherwise
  */
 export const addNewsEvent = async (content) => {
     try {
         const res = await fetch(`${BACKEND_URL}newsAndEvents/`, {
             method: "post",
             headers: {
                 "content-type": "application/json",
             },
             body: JSON.stringify(content),
         });
         // successfull
         if (res.ok) {
             return true;
         }
 
         // any server issue
         return false;
 
         // fetch fails
     } catch {
         return false;
     }
 };
 
 /**
  * Edit an existing News & Event object in the database.
  *
  * @param { int } id - Object Id in the database.
  * @param { JSON } content - Object to edit. Must conform to model schema
  *
  * @returns { boolean } - True if successful, false otherwise
  */
 export const updateNewsEvent = async (id, content) => {
     try {
         const res = await fetch(`${BACKEND_URL}newsAndEvents/${id}`, {
             method: "put",
             headers: {
                 "content-type": "application/json",
             },
             body: JSON.stringify(content),
         });
         // successfull
         if (res.ok) {
             return true;
         }
 
         // any server issue
         return false;
 
         // fetch fails
     } catch {
         return false;
     }
 };
 
 /**
  * Delete an existing News & Event object from the database.
  *
  * @param { int } id - Object Id in the database.
  *
  * @returns { boolean } - True if successful, false otherwise
  */
 export const deleteNewsEvent = async (id) => {
     try {
         const res = await fetch(`${BACKEND_URL}newsAndEvents/${id}`, {
             method: "delete",
             headers: {
                 "content-type": "application/json",
             },
         });
         // successfull
         if (res.ok) {
             return true;
         }
 
         // any server issue
         return false;
 
         // fetch fails
     } catch {
         return false;
     }
 };