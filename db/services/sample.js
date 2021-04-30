const Sample = require("../models/sample");

async function getAll() {
    return Sample.findAll();
}

module.exports = {
    getAll,
};
