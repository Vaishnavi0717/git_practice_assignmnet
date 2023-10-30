const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const authentication = (req, res, next) => {
  try {
    const { token } = req.headers.authorization;
    if (token) {
      jwt.verify(token, process.env.SECRET_CODE, (err, decoded) => {
        if (err) {
          res.status(400).send({
            msg: "Invalid User Token...Please login again to continue;...",
          });
        } else {
          req.body.userId = decoded._id;
          req.body.userEmail = decoded.email;
          req.body.userName = decoded.name;
          next();
        }
      });
    } else {
      res.status(400).send({
        msg: "Error while veryfying user token...Please login again to continue;...",
      });
    }
  } catch (error) {}
};
module.exports = {
  authentication,
};
