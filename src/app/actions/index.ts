'use server';

import { adminDb } from '@/firebase/firebaseAdminConfig';
import { FirestoreDocument } from '@/firebase/firebaseAdminConfig';
import admin from 'firebase-admin';

export async function getCollection<T>(collectionName: string): Promise<FirestoreDocument<T>[]> {
  const snapshot = await adminDb.collection(collectionName).get();
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as FirestoreDocument<T>[];
}

export async function getDocument<T>(collectionName: string, docId: string): Promise<FirestoreDocument<T> | null> {
  const doc = await adminDb.collection(collectionName).doc(docId).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...doc.data() } as FirestoreDocument<T>;
}

export async function addDocument<T extends admin.firestore.DocumentData>(
  collectionName: string,
  data: T,
): Promise<FirestoreDocument<T>> {
  const docRef = await adminDb.collection(collectionName).add(data);
  return { id: docRef.id, ...data };
}

export async function setDocument<T extends admin.firestore.DocumentData>(
  collectionName: string,
  docId: string,
  data: T,
): Promise<FirestoreDocument<T>> {
  await adminDb.collection(collectionName).doc(docId).set(data);
  return { id: docId, ...data };
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

export async function deleteDocument(collectionName: string, docId: string): Promise<{ id: string; deleted: boolean }> {
  await adminDb.collection(collectionName).doc(docId).delete();
  return { id: docId, deleted: true };
}