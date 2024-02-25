import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-83f4a.firebaseapp.com",
  projectId: "mern-blog-83f4a",
  storageBucket: "mern-blog-83f4a.appspot.com",
  messagingSenderId: "964055692983",
  appId: "1:964055692983:web:ccfeb8e88504c0992b3f32"
};

export const app = initializeApp(firebaseConfig);