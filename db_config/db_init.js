var admin = require("firebase-admin");

var serviceAccount = require("./tic-2024-2025-b33b7-firebase-adminsdk-iuqkc-4e9b6a3fd8.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  
  const db = admin.firestore()
  
  module.exports = db