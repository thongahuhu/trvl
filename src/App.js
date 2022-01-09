import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFLa3rlL8sYUEdBPW68k-_ZIfMkc6GE1Y",
  authDomain: "trvl-99efd.firebaseapp.com",
  projectId: "trvl-99efd",
  storageBucket: "trvl-99efd.appspot.com",
  messagingSenderId: "674253782690",
  appId: "1:674253782690:web:e62d9374a6491218f5a1fb",
  measurementId: "G-87K4B9HMD6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/products" element={<Products />}/>
          <Route path="/sign-up" element={<SignUp />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
