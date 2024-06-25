// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { connectAuthEmulator, getAuth } from "firebase/auth"
// import { connectDatabaseEmulator, getDatabase } from "firebase/database"
// import { connectFirestoreEmulator, getFirestore } from "firebase/firestore"
// import { Messaging } from "firebase/messaging"

import { env } from "../../env/client.env"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  // databaseURL: env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
}
// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig)

// const firebase_analytics = getAnalytics(firebase_app)
// const firebase_database = getDatabase(firebase_app)
// const firebase_firestore = getFirestore(firebase_app)

const firebase_auth = getAuth(firebase_app)

if (process.env.NODE_ENV === "development") {
  connectAuthEmulator(firebase_auth, "http://localhost:9099")

  // connectDatabaseEmulator(firebase_database, "127.0.0.1", 8080)
  // connectFirestoreEmulator(firebase_firestore, "localhost", 8080)
}

export const firebase = {
  app: firebase_app,
  auth: firebase_auth,

  // analytics: firebase_analytics,
  // database: firebase_database,
  //NOTE: i think this is more for web push notifications not realtime messaging
  // messaging: null as Messaging | null,
  //NOTE: this is the realtime database which may can be used for messaging
  // firestore: firebase_firestore,
}
