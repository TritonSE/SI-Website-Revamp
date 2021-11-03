const config = require("../../../config.js");

const BACKEND_URL = config.backend.uri;

export const fetchNewsEvents = async () => {
    try {
        const res = await fetch(`${BACKEND_URL}newsAndEvents/`, {
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

export const addNewsEvent = async (content) => {
    try {
        const res = await fetch(`${BACKEND_URL}newsAndEvents/`, {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(content)
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

export const updateNewsEvent = async (id, content) => {
    try {
        const res = await fetch(`${BACKEND_URL}newsAndEvents/${id}`, {
            method: "put",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(content)
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