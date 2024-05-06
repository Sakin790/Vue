
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyAbIOGCoSTj9fRJQKmHnziDL19O1Bhrc6Y",
    authDomain: "vue-auth-c84fc.firebaseapp.com",
    projectId: "vue-auth-c84fc",
    storageBucket: "vue-auth-c84fc.appspot.com",
    messagingSenderId: "59706943280",
    appId: "1:59706943280:web:39f657dd2ee63bfb5a4af5",
    measurementId: "G-CFJ3PSZDHF"
};


export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)