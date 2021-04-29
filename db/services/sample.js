const Sample = require("../models/sample");

async function getAll(){
    return await Sample.findAll();
}

module.exports = {
    getAll
}