import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp(functions.config().firebase);

import * as markets from "./markets";
import * as users from "./users";

// Mails
export const createUserAccount = users.createUserAccount;
export const confirmEmail = users.confirmEmail;

// Markets
export const addMarket = markets.addMarket;

// HOW To setup global env var
// firebase functions:config:set someservice.key="THE API KEY"
