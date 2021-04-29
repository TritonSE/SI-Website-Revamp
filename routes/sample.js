var express = require('express');
const {getAll} = require("../db/services/sample");
const { isValidated } = require("../middleware/validation");
var router = express.Router();


router.get('/', 
[
    isValidated,
],
async function(req, res, next) {
  const entries = await getAll();
  return res.status(200).json(entries);
});

module.exports = router;