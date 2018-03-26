"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const sendgridMail = require("@sendgrid/mail");
const SENDGRID_API_KEY = functions.config().sengrid.key;
sendgridMail.setApiKey(SENDGRID_API_KEY);
exports.createUserAccount = functions.auth.user().onCreate(event => {
    const uid = event.data.uid;
    const email = event.data.email;
    const photoUrl = event.data.photoURL || "";
    const displayName = event.data.displayName;
    const db = admin.database();
    const newUserRef = db.ref(`/users/${uid}`);
    return newUserRef
        .set({
        email: email,
        displayName: displayName,
        photoUrl: photoUrl
    })
        .then(user => {
        console.log("User created");
        return user;
    })
        .catch(error => {
        console.log("User created erorr", error);
    });
});
// export const welcomeMail = functions.database
//   .ref("/users/{uid}")
//   .onWrite(event => {
//     let user = event.data.val();
//     const db = admin.database();
//     return db
//       .ref("users/" + userUid)
//       .once("value")
//       .then(snapshot => {
//         const user = snapshot.val();
//         const msg = {
//           to: user.email,
//           from: "hello@talgo.com",
//           subject: "Welcome",
//           templateId: "7d087c6a-6958-45cc-aafd-b79754a697bb",
//           substitutionWrappers: ["{{", "}}"],
//           substitutions: {
//             name: user.displayName
//           }
//         };
//         return sendgridMail.send(msg);
//       })
//       .then(() => {
//         console.log("Email sent");
//       })
//       .catch(error => {
//         console.log("Send Welcome Email erorr", error);
//       });
//   });
//# sourceMappingURL=index.js.map