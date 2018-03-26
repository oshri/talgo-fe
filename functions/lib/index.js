"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const markets = require("./markets");
const users = require("./users");
// Mails
exports.createUserAccount = users.createUserAccount;
// Markets
exports.addMarket = markets.addMarket;
//# sourceMappingURL=index.js.map