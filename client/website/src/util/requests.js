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
        // successful
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
        // successful
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
        // successful
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

export const fetchNewsAndEvents = async () => {
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

export const fetchBranchesAndChapters = async () => {
    try {
        const res = await fetch(`${BACKEND_URL}branchesAndChapters/`, {
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

export const fetchExecCommittees = async () => {
    try {
        const response = await fetch(`${BACKEND_URL}execCommittees/`, {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
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

export const fetchEpubs = async () => {
    try {
        // create the skeleton for the returnObj
        const returnObj = { sections: [] };

        // fetch all of the filters in the database
        return await fetch(`${BACKEND_URL}publications/epubFilters`, {
            method: "get",
            headers: {
                "content-type": "application/json",
            },
        })
            .then(async (value) => {
                const filters = await value.json();

                // loop through filters and get back publications in those filters
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
                                // only display sections with at least one book
                                if (section_list.length > 0) {
                                    // add section to object in order to display
                                    return {
                                        section_title: filter.title,
                                        section_list,
                                    };
                                }
                                return null;
                            })
                    )
                ).then((sectionedPublications) => {
                    sectionedPublications.forEach((section) => {
                        if (section) returnObj.sections.push(section);
                    });
                });

                return returnObj;
            })
            .catch(() => []);
    } catch {
        // any server issue
        return [];
    }
};

export const fetchFeaturedEpubs = async () => {
    try {
        // fetch all of the filters in the database
        return await fetch(`${BACKEND_URL}publications/featured`, {
            method: "get",
            headers: {
                "content-type": "application/json",
            },
        })
    } catch {
        // any server issue
        return [];
    }
};
