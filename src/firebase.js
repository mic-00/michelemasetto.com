import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0SsuSumfoL7yLWKhq5o-mv9kGb6UnXwc",
  authDomain: "michelemasetto-com.firebaseapp.com",
  projectId: "michelemasetto-com",
  storageBucket: "michelemasetto-com.appspot.com",
  messagingSenderId: "358876980033",
  appId: "1:358876980033:web:b933cfd29ba3c03f5677c0",
  measurementId: "G-Q0TWB2L0TW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
