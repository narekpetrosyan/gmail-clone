import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../../firebase";
import { useDispatch } from "react-redux";
import { loginUser } from "./../../store/user/UserActions";

const Login = () => {
  const dispatch = useDispatch();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) =>
        dispatch(
          loginUser({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        )
      )
      .catch((error) => console.log(error));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://www.google.com/gmail/about/static/images/logo-gmail.png?cache=1adba63"
          alt=""
        />
        <Button variant="contained" color="primary" onClick={() => signIn()}>
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Login;
