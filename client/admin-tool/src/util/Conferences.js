const config = require("../config");

const BACKEND_URL = config.backend.uri;
/**
 * puts an existing conference into the database
 * @param { int } id - id of conference to be updated
 * @param { JSON } values - Object to add
 * @returns { boolean } - true if POST is successful, false otherwise
 */
async function putConference(id, values) {
    try {
        const res = await fetch(`${BACKEND_URL}conference/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                "autorization": `Bearer: ${localStorage.getItem("token")}` 
            },
            body: JSON.stringify({
                title: values.title,
                confNum: values.confNum,
                location: values.location,
                slideShowImages: values.slideShowImages,
                programs: values.programs ? values.programs : {},
                presentations: values.presentations ? values.presentations : {},
                brochures: values.brochures ? values.brochures : {},
                abstracts: values.abstracts ? values.abstracts : {},
                video: values.video ? values.video : "",
                theme: values.theme ? values.theme : "",
                signUpLink: values.signUpLink ? values.signUpLink : "",
            }),
        });

        return res.ok;
    } catch (err) {
        console.log(err);
        return false;
    }
}

/**
 * posts an existing Branch or Chapter Object tothe data base
 * @param { JSON } values content - Object to add. Must conform to model schema
 * @returns { boolean } - True of POST is successful, false otherwise
 */
async function postConferences(values) {
    try {
        const res = await fetch(`${BACKEND_URL}conference`, {
            headers: {
                "content-type": "application/json",
                "autorization": `Bearer: ${localStorage.getItem("token")}` 
            },
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: values.title,
                confNum: values.confNum,
                location: values.location,
                slideShowImages: values.slideShowImages,
                programs: values.programs,
                presentations: values.presentations,
                brochures: values.brochures,
                abstracts: values.abstracts,
                video: values.video,
                theme: values.theme,
                signUpLink: values.signUpLink,
            }),
        });

        return res.ok;
    } catch (err) {
        return false;
    }
}

/**
 * retrieves all the branches and chapters in a database and returns it as an array
 *
 * @returns {[JSON]} - array of all branches and chapters in the database as an array
 */

async function getConferences() {
    try {
        const res = await fetch(`${BACKEND_URL}conference`, {
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

/**
 * retrieves all the branches and chapters in a database and returns it as an array
 *
 * @returns {[JSON]} - array of all branches and chapters in the database as an array
 */

async function deleteConference(id) {
    try {
        const res = await fetch(`${BACKEND_URL}conference/${id}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                "autorization": `Bearer: ${localStorage.getItem("token")}` 
            },
        });
        // message sent

        return res.ok;
    } catch {
        return false;
    }
}

module.exports = { getConferences, postConferences, putConference, deleteConference };
