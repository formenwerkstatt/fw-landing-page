import admin from "firebase-admin";

export type FirestoreDocument<T> = T & { id: string };

// Initialize Firebase Admin only if it hasn't been initialized yet
if (!admin.apps.length) {
  const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string;

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccountPath),
    databaseURL: `https://fw-shop-28a91.firebaseio.com`,
  });

  // if (process.env.NODE_ENV === "development") {
  //   admin.firestore().settings({
  //     host: "localhost:8080", // Firestore Emulator host
  //     ssl: false, // Disable SSL for local emulator
  //   });
  //   console.log("🔥 Firestore Emulator connected at localhost:8080");
  // }
}

// Get Firestore instance
const adminDb = admin.firestore();

export { adminDb };
