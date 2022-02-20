/**
 * 
 */

const { verify } = require("jwt");
const { findOneUser } = require("../../db/services/adminAccounts");


exports.protect = async (req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }

    if(!token) {
        return res.status(401).json({msg: "Not authorized to access this route"});
    }

    try {
        const decoded = verify(token);

        const user = await findOneUser(decoded.email);

        if(!user) {
            return res.status(500).json({msg: "No user found with email"});
        }

        req.user = user;

        next();
    } catch (error) {
        return res.status(401).json({msg: "Not authorized to access this route"});
    }
}