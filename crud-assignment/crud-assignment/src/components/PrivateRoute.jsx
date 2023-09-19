import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {

  const auth = useSelector((store) => store.authReducer.isAuth);
   console.log(auth);

  if (auth === false) {
    return <Navigate to={"/login"} />;
  }


  return children ;

}

export default PrivateRoute;
