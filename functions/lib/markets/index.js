"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const jwt = require("jsonwebtoken");
const JWT_SECRET_KEY = functions.config().jwt.key;
const TALGO_SERVER_API = functions.config().talgo.rul;
exports.addMarket = functions.https.onRequest((req, res) => {
    const token = req.body.token;
    console.log("markets token", token);
    jwt.verify(token, JWT_SECRET_KEY, (err, authData) => {
        if (err) {
            return res.status(404).send({ message: "Something gets wrong!!" });
        }
        else {
            const marketsUrl = `${TALGO_SERVER_API}/${authData.marketName}/account/balance`;
            console.log("marketsUrl", marketsUrl);
            return res.status(200).send({
                message: "Your Token is good, you can ask for your balance."
            });
        }
    });
});
//# sourceMappingURL=index.js.map