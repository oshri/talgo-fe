import * as functions from "firebase-functions";

export const addMarket = functions.https.onRequest((req, res) => {
  res.send("Hello from Firebase!");
});
