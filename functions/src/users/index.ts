import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as sendgridMail from "@sendgrid/mail";

const SENDGRID_API_KEY = functions.config().sengrid.key;
sendgridMail.setApiKey(SENDGRID_API_KEY);

export const createUserAccount = functions.auth.user().onCreate(event => {
  const uid = event.data.uid;
  const email = event.data.email;
  const photoUrl = event.data.photoURL || "";
  const displayName = event.data.displayName;

  const msg = {
    to: email,
    from: "hello@talgo.com",
    subject: "Welcome",
    templateId: "7d087c6a-6958-45cc-aafd-b79754a697bb",
    substitutionWrappers: ["{{", "}}"],
    substitutions: {
      displayName: displayName,
      customerID: uid
    }
  };

  return sendgridMail
    .send(msg)
    .then(() => {
      console.log("Confirm Email sent");
    })
    .catch(error => {
      console.log("Confirm Email sent erorr", error);
    });
});
