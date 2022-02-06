/**
 * Contains any server calls made for the Newsletters page 
 * on the admin tool.
 * 
 * @summary     Newsletters server calls.
 * @author      Elias Fang, Navid Boloorian
 */

const config = require("../../../config.js");

const BACKEND_URL = config.backend.uri;

/**
 * Retrieves all newsletters items from database. [] \
 * is returned if any issues occur.
 *
 * @returns { [JSON] } - Each object denotes a unique Newsletters 
 * item stored in the database
 */
export const fetchNewsletters = async () => {
    try {
        const res = await fetch(`${BACKEND_URL}newsletters`, {
            method: "get",
            headers: {
                "content-type": "application/json",
            },
        });
        // successfull
        if (res.ok) {
            const data = await res.json();
            return data; // returns array of JSON objects
        }

        // any server issue
        return [];

        // fetch fails
    } catch {
        return [];
    }
};

/**
 * Add a new Newsletters object to the database.
 *
 * @param { JSON } content - Object to add. Must conform to model 
 * schema
 * 
 * @returns { boolean } - True if successful, false otherwise
 */
export const addNewsletter = async (content) => {
    try {
        console.log(content)

        const res = await fetch(`${BACKEND_URL}newsletters/`, {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(content),
        });

        console.log(res)

        // successfull
        if (res.ok) {
            const json = await res.json();
            return json;
        }

        // any server issue
        return null;

        // fetch fails
    } catch {
        return null;
    }
};

/**
 * Edit an existing Newsletters object in the database.
 *
 * @param { int } id - Object Id in the database.
 * @param { JSON } content - Object to edit. Must conform to model 
 * schema
 * 
 * @returns { boolean } - True if successful, false otherwise
 */
export const updateNewsletter = async (id, content) => {
    try {
        const res = await fetch(`${BACKEND_URL}newsletters/${id}`, {
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
 * Delete an existing Newsletter object from the database.
 *
 * @param { int } id - Object Id in the database.
 *
 * @returns { boolean } - True if successful, false otherwise
 */
 export const deleteNewsletter = async (id) => {
    try {
        const res = await fetch(`${BACKEND_URL}newsletters/${id}`, {
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
