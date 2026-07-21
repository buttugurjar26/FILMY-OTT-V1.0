import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCtyDTGscr1KqN4TLTD3Dw4v4Z0IqNzmSc",
  authDomain: "filmy-ott.firebaseapp.com",
  projectId: "filmy-ott",
  storageBucket: "filmy-ott.firebasestorage.app",
  messagingSenderId: "781542740369",
  appId: "1:781542740369:web:55f059387e05651f8c0a30"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);