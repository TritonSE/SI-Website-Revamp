const config = require("../config.js");

const BACKEND_URL = config.backend.uri;

/* eslint-disable */

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
        const returnObj = {sections: []}

        await fetch(`${BACKEND_URL}publications/epubFilters`, {
            method: "get",
            headers: {
                "content-type": "application/json",
            },
        })
        .then(async value => {
            const filters = await value.json();

            await Promise.all(filters.map(filter => {
                return fetch(`${BACKEND_URL}publications?filterId=${filter.id}`, {
                    method: "get",
                    headers: {
                        "content-type": "application/json",
                    },
                })
                .then(response => response.json())
                .then(value => {
                    if(value.length > 0) {
                        returnObj.sections.push({
                            section_title: filter.title,
                            section_list: value
                        })
                    }
                })
            }))
        })

        return returnObj;

        // if(response.ok) {
        //     const d = await response.json();

        //     console.log(d)

        //     return d
        // }

        // return returnObj

        // console.log("called")

        // if(response.ok) {
        //     const filters = await response.json();

        //     filters.map(filter => {
        //         fetch(`${BACKEND_URL}publications?filterId=${filter.id}`, {
        //             method: "get",
        //             headers: {
        //                 "content-type": "application/json",
        //             },
        //         })
        //         .then((result) => result.json())
        //         .then((value) => {
        //             if(value.length > 0) {
        //                 returnObj.sections.push({
        //                     section_title: filter.title,
        //                     section_list: value
        //                 })
        //             }
        //         });
    
        //         return filters;
        //     })

        //     return returnObj;
        // }

        // console.log("failed")

        // return [];
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
