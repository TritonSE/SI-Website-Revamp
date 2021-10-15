const config = require("../config.js");

const BACKEND_URL = config.backend.uri;

export const fetchNewsletters = async () => {
    try {
        const res = await fetch(`${BACKEND_URL}newsletters/`, {
            method: "get",
            headers: {
                "content-type": "application/json",
            },
        });
        // successfull
        if (res.ok) {
            const data = await res.json();
            return data;
        }

        // any server issue
        return [];

        // fetch fails
    } catch {
        return [];
    }
};

export const fetchConferences = async () => {
    try {
        const response = await fetch(`${BACKEND_URL}conference/`, {
            method: "get",
            headers: {
                "content-type": "application/json",
            },
        });

        if (response.ok) {
            const data = await response.json();
            return data;
        }
    } catch {
        // pass through if any error
    }
    return [];
};
