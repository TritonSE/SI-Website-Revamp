const Conference = require("../models/conference");

async function getAll() {
    return Conference.findAll();
}

async function create(data) {
    if (data.slideShowImages.urls.length > 0) return Conference.create(data);
    return null;
}

module.exports = {
    getAll,
    create,
};
