import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATkKSbuaqSZzNH5oLyjHixXKwvh50ql_k",
  authDomain: "my-todo-list-f5b3a.firebaseapp.com",
  databaseURL: "https://my-todo-list-f5b3a-default-rtdb.firebaseio.com",
  projectId: "my-todo-list-f5b3a",
  storageBucket: "my-todo-list-f5b3a.appspot.com",
  messagingSenderId: "991506191285",
  appId: "1:991506191285:web:c00109e7d0380c4ce5bffc",
  measurementId: "G-DWTXD3DRHW",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
