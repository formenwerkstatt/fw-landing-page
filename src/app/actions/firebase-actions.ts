"use server";

import { adminDb } from "@/lib/firebaseAdminConfig";
import { FirestoreDocument } from "@/lib/firebaseAdminConfig";
import dateToLocale from "@/utils/dateToLocale";
import admin from "firebase-admin";

// Helper function to serialize Firestore data
function serializeData<T>(data: admin.firestore.DocumentData | undefined): T {
  if (!data) return {} as T;

  const serialized = Object.entries(data).reduce(
    (acc, [key, value]) => {
      if (value instanceof admin.firestore.Timestamp) {
        acc[key] = dateToLocale(value.toDate());
      } else if (value && typeof value === "object" && !Array.isArray(value)) {
        acc[key] = serializeData(value);
      } else {
        acc[key] = value;
      }
      return acc;
    },
    {} as Record<string, any>,
  );

  return serialized as T;
}

export async function getCollection<T>(
  collectionName: string,
): Promise<FirestoreDocument<T>[]> {
  const snapshot = await adminDb.collection(collectionName).get();
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...serializeData<T>(doc.data()),
  }));
}

export async function getDocument<T>(
  collectionName: string,
  docId: string,
): Promise<FirestoreDocument<T> | null> {
  const doc = await adminDb.collection(collectionName).doc(docId).get();
  if (!doc.exists) return null;
  return {
    id: doc.id,
    ...serializeData<T>(doc.data()),
  };
}

export async function addDocument<T extends admin.firestore.DocumentData>(
  collectionName: string,
  data: T,
): Promise<FirestoreDocument<T>> {
  const docRef = await adminDb.collection(collectionName).add({
    ...data,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });

  const doc = await docRef.get();
  const serializedData = serializeData<T>(doc.data());

  return {
    id: docRef.id,
    ...serializedData,
  };
}

export async function updateDocument<T>(
  collectionName: string,
  docId: string,
  data: Partial<T>,
): Promise<FirestoreDocument<T>> {
  await adminDb.collection(collectionName).doc(docId).update(data);
  const updatedDoc = await getDocument<T>(collectionName, docId);
  if (!updatedDoc) throw new Error(`Document with ID ${docId} does not exist`);
  return updatedDoc;
}

export async function deleteDocument(
  collectionName: string,
  docId: string,
): Promise<{ id: string; deleted: boolean }> {
  await adminDb.collection(collectionName).doc(docId).delete();
  return { id: docId, deleted: true };
}
