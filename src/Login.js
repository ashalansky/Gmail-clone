import { Button } from "@mui/material";
import React from "react";
import { login } from "./features/userSlice";
import { useDispatch } from "react-redux";
import { auth, provider } from "./firebase";
import "./Login.css";

function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://1000marcas.net/wp-content/uploads/2019/11/logo-Gmail-1.png"
          alt=""
        />
        <Button onClick={signIn} variant="contained" color="primary">
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
