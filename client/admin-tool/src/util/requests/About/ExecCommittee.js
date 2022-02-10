const config = require("../../../config.js");

const BACKEND_URL = config.backend.uri;

export const fetchCommittees = async () => {
    try {
        const res = await fetch(`${BACKEND_URL}execCommittees`, {
            method: "get",
            headers: {
                "content-type": "application/json",
            },
        });

        if(res.ok) {
            const data = await res.json();
            return data;
        }

        return [];
    } catch {
        return [];
    }
}

export const addCommittee = async (content) => {
    try {
        const res = await fetch(`${BACKEND_URL}execComittees`, {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(content),
        })

        if(res.ok) {
            const json = await res.json();
            return json;
        }

        return null;
    } catch {
        return null;
    }
}

export const updateCommittee = async (id, content) => {
    try {
        const res = await fetch(`${BACKEND_URL}execComittees/${id}`, {
            method: "put",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(content),
        })

        if(res.ok) {
            return true;
        }

        return false;
    } catch {
        return false;
    }
}

export const deleteCommittee = async (id) => {
    try {
        const res = await fetch(`${BACKEND_URL}execComittees/${id}`, {
            method: "delete",
            headers: {
                "content-type": "application/json",
            },
        });

        if(res.ok) {
            return true;
        }

        return false;
    } catch {
        return false;
    }
}

