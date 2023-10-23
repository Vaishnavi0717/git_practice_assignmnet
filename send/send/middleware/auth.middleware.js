const { BlackListModel } = require("../model/blackList.model")
const jwt = require("jsonwebtoken");
const auth = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (token) {
        const foundToken = await BlackListModel.findOne({ "token":token});
        if (foundToken) {
            res.status(200).send({ "msg": "please login again" })
            return ;
        }
        else {
            jwt.verify(token, "masai", (err, decoded) => {
                if (decoded) {
                    next()
                }
                  else{
                    res.send(err);
                }
            });
        }
    }
    else {
        res.status(400).send({"msg":"You are not authorized"})
    }
}
module.exports = {
    auth
}