const config = require("../config.js");

const BACKEND_URL = config.backend.uri;

export const fetchNewsletters = async () => {
    const res = await fetch(`${BACKEND_URL}newsletters/getAllNewsletters`, {
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
};
