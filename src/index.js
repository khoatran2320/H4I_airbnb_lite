import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const firebase = require("firebase");
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyD1GQywJzscnSSQJEfB7eLQr3qn5MXVe4Q",
  authDomain: "airbnb-lite.firebaseapp.com",
  databaseURL: "https://airbnb-lite.firebaseio.com",
  projectId: "airbnb-lite",
  storageBucket: "airbnb-lite.appspot.com",
  messagingSenderId: "488688608255",
  appId: "1:488688608255:web:07bb67b4d07b6b2c813dca"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
