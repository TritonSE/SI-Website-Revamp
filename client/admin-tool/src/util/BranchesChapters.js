const config = require("../config.js");

const BACKEND_URL = config.backend.uri;
/**
 * puts an existing Branch or Chapter Object tothe data base
 * @param { int } id - id of branch/chapter to be updated
 * @param { JSON } values content - Object to add. Must conform to model schema
 * @returns { boolean } - True of POST is successful, false otherwise
 */
async function putBranchChapters(id, values) {
    try {
        const res = await fetch(`${BACKEND_URL}branchesAndChapters/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: values.name.value,
                email: values.email.value,
                longitude: values.longitude.value,
                latitude: values.latitude.value,
                isBranch: values.isBranch.value,
                siteLink: values.siteLink.value,
            }),
        });
        return res.ok; // message sent
    } catch {
        return false;
    }
}

/**
 * posts an existing Branch or Chapter Object tothe data base
 * @param { JSON } values content - Object to add. Must conform to model schema
 * @returns { boolean } - True of POST is successful, false otherwise
 */
async function postBranchChapters(values) {
    try {
        const res = await fetch(`${BACKEND_URL}branchesAndChapters/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: values.name.value,
                email: values.email.value,
                longitude: values.longitude.value,
                latitude: values.latitude.value,
                isBranch: values.isBranch.value,
                siteLink: values.siteLink.value,
            }),
        });
        return res.ok; // message sent
    } catch {
        return false;
    }
}

/**
 * retrieves all the branches and chapters in a database and returns it as an array
 *
 * @returns {[JSON]} - array of all branches and chapters in the database as an array
 */

async function getBranchChapters() {
    try {
        const res = await fetch(`${BACKEND_URL}branchesAndChapters/`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        // message sent
        if (res.ok) {
            const data = await res.json();
            // console.log(JSON.stringify(data));
            return data;
        }
        return [];
    } catch {
        return [];
    }
}

module.exports = { putBranchChapters, getBranchChapters, postBranchChapters };
