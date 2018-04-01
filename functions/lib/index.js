"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const markets = require("./markets");
const users = require("./users");
// Mails
exports.createUserAccount = users.createUserAccount;
exports.confirmEmail = users.confirmEmail;
// Markets
exports.addMarket = markets.addMarket;
// HOW To setup global env var
// firebase functions:config:set someservice.key="THE API KEY"
//# sourceMappingURL=index.js.map