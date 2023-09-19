import React, { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/Authentication/action";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((store) => store.authReducer.isAuth);
  const err = useSelector((store) => store.authReducer.isError);

  const handleLogin = () => {
    let userData = { email, password };
    dispatch(login(userData));
  };

  return (
    <WRAPPER auth={`${auth}`}>
      <h1>{auth ? "LOGIN SUCCESSFULL..." : "PLEASE LOGIN.."}</h1>
      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>LOGIN</button>
    </WRAPPER>
  );
}

const WRAPPER = styled.div`
  width: 400px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  h1 {
    color: ${({ auth }) => (auth == "true" ? "green" : "red")};
  }
  input {
    height: 40px;
  }

  button {
    height: 30px;
    background-color: black;
    color: white;
    border-radius: 5px;
    border-style: none;
    font-size: 20px;
    padding: 10px, 10px;
  }
`;
export default Login;
