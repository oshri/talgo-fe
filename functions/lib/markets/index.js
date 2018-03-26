"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
exports.addMarket = functions.https.onRequest((req, res) => {
    res.send("Hello from Firebase!");
});
//# sourceMappingURL=index.js.map