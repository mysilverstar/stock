import React, { useEffect } from "react";
import { connect } from "react-redux";
import SigninButton from "../components/SigninButton";
import { login } from "../store/Store";
import { auth } from "../utils/firebase";
import "./Login.css";

function Login({ history, doLogin }) {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        doLogin(user.email);
        history.push("/main");
      }
    });
    return unsubscribe;
  }, [history, doLogin]);

  return (
    <div className="login_main">
      <div className="title">Stock Manager</div>
      <div className="button">
        <SigninButton type="google" />
      </div>

      <div
        className="guest_button"
        onClick={() => {
          auth.signInWithEmailAndPassword("guest@guest.com", "password");
        }}
      >
        Guest Login
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    doLogin: (user) => dispatch(login({ user: user, isAuth: true })),
  };
}

export default connect(null, mapDispatchToProps)(Login);
