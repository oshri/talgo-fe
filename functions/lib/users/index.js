"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const sendgridMail = require("@sendgrid/mail");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const crs = cors({
    allowedHeaders: [
        "Origin",
        "X-Requested-With",
        "Content-Type",
        "Accept",
        "X-Access-Token",
        "Access-Control-Allow-Origin"
    ],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: "http://localhost:4200",
    preflightContinue: false
});
const JWT_SECRET_KEY = functions.config().jwt.key;
const SENDGRID_API_KEY = functions.config().sengrid.key;
sendgridMail.setApiKey(SENDGRID_API_KEY);
exports.createUserAccount = functions.auth.user().onCreate(event => {
    const uid = event.data.uid;
    const email = event.data.email;
    const photoUrl = event.data.photoURL || "";
    const displayName = event.data.displayName;
    jwt.sign({ uid }, JWT_SECRET_KEY, { expiresIn: "24h" }, (err, token) => {
        const msg = {
            to: email,
            from: "hello@talgo.com",
            subject: "Welcome",
            templateId: "7d087c6a-6958-45cc-aafd-b79754a697bb",
            substitutionWrappers: ["{{", "}}"],
            substitutions: {
                displayName: displayName,
                token
            }
        };
        return sendgridMail
            .send(msg)
            .then(() => {
            console.log(`Confirm Email sent To ${displayName} Uid  ${token}`);
        })
            .catch(error => {
            console.log("Confirm Email sent erorr  To ${displayName} Uid  ${uid}", error);
        });
    });
});
exports.confirmEmail = functions.https.onRequest((req, res) => {
    crs(req, res, () => {
        const token = req.body.token;
        const email = req.body.email;
        jwt.verify(token, JWT_SECRET_KEY, (err, authData) => {
            if (err) {
                return res.status(404).send({ message: "Something gets wrong!!" });
            }
            else {
                admin
                    .firestore()
                    .doc(`users/${authData.uid}`)
                    .update({ emailConfirm: true })
                    .then(doc => console.log("success Update User", doc))
                    .catch(e => console.log("updateUser", e));
                return res.status(200).send({
                    message: "Your Email Confirm, you can login.",
                    authData,
                    email
                });
            }
        });
    });
});
//# sourceMappingURL=index.js.map