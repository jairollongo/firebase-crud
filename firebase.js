// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getFirestore,
    collection,
    getDocs,
    onSnapshot,
    addDoc,
    deleteDoc,
    doc,
    getDoc,
    updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCGtjvEauYAMeWbKb8GLlgWPtpym_EZF40",
    authDomain: "fir-javascript-crud-72b30.firebaseapp.com",
    projectId: "fir-javascript-crud-72b30",
    storageBucket: "fir-javascript-crud-72b30.appspot.com",
    messagingSenderId: "177392853954",
    appId: "1:177392853954:web:785907e1fda049ab82ac5b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

/**
 * Save a New Task in Firestore
   @param {string} title the title of the Task
   @param {string} description the description of the Task
 */
export const saveTask = (title, description) =>
    addDoc(collection(db, "tasks"), { title, description });

export const onGetTasks = (callback) =>
    onSnapshot(collection(db, "tasks"), callback);

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields) =>
    updateDoc(doc(db, "tasks", id), newFields);

export const getTasks = () => getDocs(collection(db, "tasks"));