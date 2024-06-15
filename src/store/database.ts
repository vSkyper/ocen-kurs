// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDR-m-0cv52cGPtkYVfj63Dia_jOEkqCE8',
  authDomain: 'ocen-kurs.firebaseapp.com',
  projectId: 'ocen-kurs',
  storageBucket: 'ocen-kurs.appspot.com',
  messagingSenderId: '802501027401',
  appId: '1:802501027401:web:88d2459bb103bb2ce44198',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
