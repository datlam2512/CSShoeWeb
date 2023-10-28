import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZxW_nwkwNT3fkLQklYxazk8Nsa4jXPB0",
  authDomain: "shoeweb-2d985.firebaseapp.com",
  projectId: "shoeweb-2d985",
  storageBucket: "shoeweb-2d985.appspot.com",
  messagingSenderId: "419901309776",
  appId: "1:419901309776:web:33f4a768eab5f811e56255",
  measurementId: "G-LEMW3JT0TQ"
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth();