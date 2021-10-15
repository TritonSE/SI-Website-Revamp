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

export const fetchCommittees = async () => {
    try {
        const res = await fetch(`${BACKEND_URL}volunteers/committees`, {
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

export const fetchMemberships = async () => {
    try {
        const res = await fetch(`${BACKEND_URL}memberships/membershipTypes/`, {
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
