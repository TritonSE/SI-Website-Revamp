const config = require("../../../config.js");

const BACKEND_URL = config.backend.uri;
/**
 * puts an existing Branch or Chapter Object tothe data base
 * @param { int } id - id of branch/chapter to be updated
 * @param { JSON } values content - Object to add. Must conform to model schema
 * @returns { boolean } - True of POST is successful, false otherwise
 */
export const putBranchChapters = async (id, content) => {
    try {
        const res = await fetch(`${BACKEND_URL}branchesAndChapters/${id}`, {
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
    } catch {
        return false;
    }
};

/**
 * posts an existing Branch or Chapter Object tothe data base
 * @param { JSON } values content - Object to add. Must conform to model schema
 * @returns { boolean } - True of POST is successful, false otherwise
 */
export const postBranchChapters = async (content) => {
    try {
        const res = await fetch(`${BACKEND_URL}branchesAndChapters/`, {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(content),
        });

        if (res.ok) {
            const json = await res.json();
            return json;
        }

        // any server issue
        return null;
    } catch {
        return null;
    }
};

/**
 * retrieves all the branches and chapters in a database and returns it as an array
 *
 * @returns {[JSON]} - array of all branches and chapters in the database as an array
 */

export const getBranchChapters = async () => {
    try {
        const res = await fetch(`${BACKEND_URL}branchesAndChapters/`, {
            method: "get",
            headers: {
                "content-type": "application/json",
            },
        });

        // message sent
        if (res.ok) {
            const data = await res.json();
            return data; // returns array of JSON objects
        }

        // any server issue
        return [];
    } catch {
        return [];
    }
};

/**
 * Delete an existing branch object from the database.
 *
 * @param { int } id - Object Id in the database.
 *
 * @returns { boolean } - True if successful, false otherwise
 */
export const deleteBranchChapters = async (id) => {
    try {
        const res = await fetch(`${BACKEND_URL}branchesAndChapters/${id}`, {
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
