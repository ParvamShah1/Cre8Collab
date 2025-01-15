import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // Replace with your Firebase config
  apiKey: "AIzaSyBfWTpKS0NxW0olZa0doLhXX7b_aLtYpNg",
  authDomain: "cre8collab-a8ee8.firebaseapp.com",
  projectId: "cre8collab-a8ee8",
  storageBucket: "cre8collab-a8ee8.firebasestorage.app",
  messagingSenderId: "623593425659",
  appId: "1:623593425659:web:160e16b315b768f53fbe5e",
  measurementId: "G-TQCXWZMH21"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
