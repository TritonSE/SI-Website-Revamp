const config = require("../../../config.js");

const BACKEND_URL = config.backend.uri;

/**
 * Retrieves all newsletters items from database. [] \
 * is returned if any issues occur.
 *
 * @returns { [JSON] } - Each object denotes a unique Newsletters
 * item stored in the database
 */
export const fetchCommittees = async () => {
    try {
        const res = await fetch(`${BACKEND_URL}execCommittees`, {
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
export const addCommittee = async (content) => {
    try {
        console.log(content);

        const res = await fetch(`${BACKEND_URL}execCommittees`, {
            method: "post",
            headers: {
                "content-type": "application/json",
                autorization: `Bearer: ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(content),
        });

        console.log(res);

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
export const updateCommittee = async (id, content) => {
    try {
        const res = await fetch(`${BACKEND_URL}execCommittees/${id}`, {
            method: "put",
            headers: {
                "content-type": "application/json",
                autorization: `Bearer: ${localStorage.getItem("token")}`,
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
export const deleteCommittee = async (id) => {
    try {
        const res = await fetch(`${BACKEND_URL}execCommittees/${id}`, {
            method: "delete",
            headers: {
                "content-type": "application/json",
                autorization: `Bearer: ${localStorage.getItem("token")}`,
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
