import React, { useEffect } from "react";
import { connect } from "react-redux";
import SigninButton from "../components/SigninButton";
import { auth } from "../utils/firebase";
import "./Login.css";

function Login({ history, store }) {
  console.log("Login START");
  useEffect(() => {
    if (store.authenticate.isAuth) {
      history.push("/main");
    }
  }, [history, store.authenticate.isAuth]);

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

function mapStateToProps(state) {
  return { store: state };
}

export default connect(mapStateToProps, null)(Login);
