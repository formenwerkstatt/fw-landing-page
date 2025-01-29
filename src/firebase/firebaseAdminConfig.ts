import admin from "firebase-admin";

export type FirestoreDocument<T> = T & { id: string };

if (!admin.apps.length) {
  const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string;

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccountPath),
    databaseURL: `https://fw-shop-28a91.firebaseio.com`,
  });
}

export const adminDb = admin.firestore();

