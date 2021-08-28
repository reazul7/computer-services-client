import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import "./LogIn.css";
import { UserContext } from "../../../App";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import logo from "../../../images/logo-com-service.svg";
import googleIcon from "../../../images/google.png";

const LogIn = () => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        var credential = result.credential;
        var token = credential.accessToken;
        var { displayName, email, photoURL } = result.user;
        const signInUser = { name: displayName, email, photo: photoURL };
        setLoggedInUser(signInUser);
        // localStorage.setItem('user', JSON.stringify(signInUser));
        history.replace(from);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
      });
  };
  return (
    <div className="mt-5 pt-5">
      <Link
        to="/"
        style={{ textAlign: "center", color: "black" }}
        class="navbar-brand d-sm-block mt-5 pt-5"
        href="#"
      >
        <div className="flex justify-center">
            <img style={{ width: "50px" }} src={logo} alt="" />
        </div>
         Computer Services
      </Link>
      <div>
        <div className="gButton bg-gray-200 rounded-full shadow-none mt-4">
          <img
            style={{ width: "25px" }}
            className="ms-3"
            src={googleIcon}
            alt=""
          />
          <button className="googleButton" onClick={handleGoogleSignIn}>
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
