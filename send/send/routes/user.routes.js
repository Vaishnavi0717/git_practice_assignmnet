const express = require("express");
const { UserModel } = require("../model/user.module");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { BlackListModel } = require("../model/blackList.model")
userRouter.post("/register", async (req, res) => {
    const { name, email, pass, city, age } = req.body;

    let existingAccount = await UserModel.findOne({ email });
    if (existingAccount) {
        return res.status(400).send({ "msg": "This email already exists in our system" })
    }

    const capital = /[A-Z]/;  
    const digits = /[0-9]/;
    const speacial = /[!@#$%^&*()_+{}[\]:;<>,.?~-]/;

    if (pass.length < 8 || !pass.match(capital) || !pass.match(digits) || !pass.match(speacial)) {
        return res.status(401).send({ "msg": "Password does not meet the required criteria. It should have at least one uppercase character, one number, one special character, and be at least 8 characters long." })
    }
    try {
        bcrypt.hash(pass, 5, async (err, hash) => {
            if (err) {
                res.status(500).send({ "msg": "Error hashing the password" })
            }
            else {
                const user = new UserModel({ name, email, pass: hash, city, age });
                await user.save()
                res.status(200).send({ "msg": "The new user has been registered", "registeredUser": req.body })
            }
        });
    } catch (err) {
        res.status(400).send({ "msg": err })
    }
})


userRouter.post("/login", async (req, res) => {
    const { email, pass } = req.body
    try {
        const user = await UserModel.findOne({ email });
        if (user) {
            bcrypt.compare(pass, user.pass, (err, result) => {
                if (result) {
                    const token = jwt.sign({ course: "nem111" }, "masai", { expiresIn: "7m" })
                    res.status(200).send({ "msg": "Login successful!", "token": token })
                }
                else {
                    res.status(400).send({ "error": "please check your credintials" })
                }
            });
        }
        else{
            res.status(400).send({"Error":"User Not found"})
        }
    } catch (error) {
        res.status(400).send({ "error": error })
    }
})

userRouter.get("/logout", async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        const blocklist = new BlackListModel({ "token": token });
        await blocklist.save();
        res.status(200).send({ "msg": "User has been logged out" });
    } catch (error) {
        res.status(400).send({"error": error});
    }
})

module.exports = {
    userRouter
}