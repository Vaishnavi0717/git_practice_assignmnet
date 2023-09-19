import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <DIV>
      <h1>Product List </h1>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/admin">Admin</Link>
    </DIV>
  );
};

const DIV = styled.div`
    display: flex;
    align-items:center;
    gap:20px;
    margin:10px;
    border-bottom: 2px solid black

`

export default Navbar;
