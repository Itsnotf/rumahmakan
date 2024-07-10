// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNDPN2JxbvnJFI0RBaFC3mkjPCfk_HZy0",
  authDomain: "rumah-makan-102e1.firebaseapp.com",
  projectId: "rumah-makan-102e1",
  storageBucket: "rumah-makan-102e1.appspot.com",
  messagingSenderId: "353485608475",
  appId: "1:353485608475:web:6fd7e061ef318557e20abe",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

export default app;
