"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const sendgridMail = require("@sendgrid/mail");
const SENDGRID_API_KEY = functions.config().sengrid.key;
sendgridMail.setApiKey(SENDGRID_API_KEY);
exports.welcomeMail2 = functions.auth.user().onCreate(event => {
    const data = event.data;
    console.log("user created", data);
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