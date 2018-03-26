"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const sendgridMail = require("@sendgrid/mail");
const SENDGRID_API_KEY = functions.config().sengrid.key;
sendgridMail.setApiKey(SENDGRID_API_KEY);
exports.welcomeMail = functions.firestore
    .document("users")
    .onCreate(event => {
    const userUid = event.params.userUid;
    const db = admin.firestore();
    return db
        .collection("users")
        .doc(userUid)
        .get()
        .then(doc => {
        const user = doc.data();
        const msg = {
            to: user.email,
            from: "hello@talgo.com",
            subject: "Welcome",
            templateId: "7d087c6a-6958-45cc-aafd-b79754a697bb",
            substitutionWrappers: ["{{", "}}"],
            substitutions: {
                name: user.displayName
            }
        };
        return sendgridMail.send(msg);
    })
        .then(() => {
        console.log("Email sent");
    })
        .catch(error => {
        console.log("Send Welcome Email erorr", error);
    });
});
//# sourceMappingURL=index.js.map