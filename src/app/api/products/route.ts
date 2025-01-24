import { NextResponse } from "next/server";
import { adminDb } from "@/firebase/firebaseAdminConfig";
import admin from "firebase-admin";

const COLLECTION_NAME = "products";

// Fetch all products
export async function GET() {
  try {
    const snapshot = await adminDb.collection(COLLECTION_NAME).get();

    const products = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json({ products });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 },
    );
  }
}

// Add a product
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, price, description, imgUrl, stock, reviews } = body;

    if (!name || !price) {
      return NextResponse.json(
        { error: "Name and price are required" },
        { status: 400 },
      );
    }

    const docRef = await adminDb.collection(COLLECTION_NAME).add({
      name,
      price,
      description,
      imgUrl,
      stock,
      reviews,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    return NextResponse.json({
      id: docRef.id,
      message: "Product added successfully",
    });
  } catch (error) {
    console.error("Error adding product:", error);
    return NextResponse.json(
      { error: "Failed to add product" },
      { status: 500 },
    );
  }
}
