import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA6PMGcik_YRJsoBZOgxdBrALHNwuJj9dA",
  authDomain: "fir-authentication-b3eaf.firebaseapp.com",
  projectId: "fir-authentication-b3eaf",
  storageBucket: "fir-authentication-b3eaf.appspot.com",
  messagingSenderId: "425021305145",
  appId: "1:425021305145:web:52e351f5356866819178e8"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;