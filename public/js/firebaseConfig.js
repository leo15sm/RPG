// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeYrRq60dDQJC3mK7BfvNJXKjfujkIrXw",
  authDomain: "login-leosm15.firebaseapp.com",
  projectId: "login-leosm15",
  storageBucket: "login-leosm15.firebasestorage.app",
  messagingSenderId: "812206259769",
  appId: "1:812206259769:web:f914076e7d0d54882257e8",
  measurementId: "G-CTMSTT8GNV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Inicializando Firestore e exportando para ser utilizado em outros arquivos
export const db = getFirestore(app);