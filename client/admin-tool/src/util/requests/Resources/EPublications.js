/**
 * Contains any server calls made for the EPublications page on the admin tool
 *
 * @summary     EPublications server calls
 * @author      Navid Boloorian
 */

const config = require("../../../config.js");

const BACKEND_URL = config.backend.uri;

/**
 * Retrieves all EPub items fro database
 *
 * @returns { [JSON] } - Each object denotes a unique EPub item
 */
export const fetchEPublications = async () => {
    try {
        const res = await fetch(`${BACKEND_URL}publications`, {
            method: "get",
            headers: {
                "content-type": "application/json",
            },
        });

        if (res.ok) {
            const data = await res.json();
            return data;
        }

        return [];
    } catch {
        return [];
    }
};

export const fetchFilterByName = async (name) => {
    try {
        const res = await fetch(`${BACKEND_URL}publications/`, {
            method: "get",
            headers: {
                "content-type": "application/json",
            },
        });

        if (res.ok) {
            const data = await res.json();
            return data;
        }

        return [];
    } catch {
        return [];
    }
};

/**
 * Get list of possible filters
 */
export const fetchFilters = async () => {
    try {
        const res = await fetch(`${BACKEND_URL}publications/epubfilters`, {
            method: "get",
            headers: {
                "content-type": "application/json",
            },
        });

        if (res.ok) {
            const data = await res.json();
            return data;
        }

        return null;
    } catch (err) {
        console.log(err);
        return null;
    }
};

/**
 * Count the number of featured publications
 */
export const fetchFeatured = async () => {
    try {
        const res = await fetch(`${BACKEND_URL}publications/featured`, {
            method: "get",
            headers: {
                "content-type": "application/json",
            },
        });

        if (res.ok) {
            const data = await res.json();
            return data;
        }

        return -1;
    } catch {
        return -1;
    }
};

/**
 * Add new EPub object to the database
 *
 * @param { JSON } content - Object to add
 * @returns { boolean } - True if successful, False otherwise
 */
export const addEPublication = async (content) => {
    try {
        const res = await fetch(`${BACKEND_URL}publications/`, {
            method: "post",
            headers: {
                "content-type": "application/json",
                "autorization": `Bearer: ${localStorage.getItem("token")}` 
            },
            body: JSON.stringify(content),
        });

        if (res.ok) {
            const json = await res.json();
            return json;
        }

        return null;
    } catch {
        return null;
    }
};

/**
 * Update EPub object with new data
 *
 * @param { int } id - ID of EPub to update
 * @param { JSON } content - New content
 * @returns {boolean} - True if succesful, False otherwise
 */
export const updateEPublication = async (id, content) => {
    try {
        const res = await fetch(`${BACKEND_URL}publications/${id}`, {
            method: "put",
            headers: {
                "content-type": "application/json",
                "autorization": `Bearer: ${localStorage.getItem("token")}` 
            },
            body: JSON.stringify(content),
        });

        if (res.ok) {
            return true;
        }

        return false;
    } catch {
        return false;
    }
};

/**
 * Delete EPub object with specified ID
 *
 * @param { int } id - ID of EPub object to be deleted
 * @returns {boolean} - True if successful, False otherwise
 */
export const deleteEPublication = async (id) => {
    try {
        const res = await fetch(`${BACKEND_URL}publications/${id}`, {
            method: "delete",
            headers: {
                "content-type": "application/json",
                "autorization": `Bearer: ${localStorage.getItem("token")}` 
            },
        });

        if (res.ok) {
            return true;
        }

        return false;
    } catch {
        return false;
    }
};
