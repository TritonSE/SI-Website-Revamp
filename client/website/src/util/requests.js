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

export const fetchEpubs = async () => {
    try {
        const returnObj = { sections: [] };

        await fetch(`${BACKEND_URL}publications/epubFilters`, {
            method: "get",
            headers: {
                "content-type": "application/json",
            },
        }).then(async (value) => {
            const filters = await value.json();

            await Promise.all(
                filters.map((filter) =>
                    fetch(`${BACKEND_URL}publications?filterId=${filter.id}`, {
                        method: "get",
                        headers: {
                            "content-type": "application/json",
                        },
                    })
                        .then((response) => response.json())
                        .then((section_list) => {
                            if (section_list.length > 0) {
                                returnObj.sections.push({
                                    section_title: filter.title,
                                    section_list,
                                });
                            }
                        })
                )
            );
        });

        return returnObj;
    } catch {
        // any server issue
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
