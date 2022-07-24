import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
const reqresUser = {
  email: "eve.holt@reqres.in",
  password: "cityslicka",
};

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");
  const [userName, setUserName] = useState("");
  const [userDetails, setuserDetails] = useState(null);
  const [error, setError] = useState(false)
  let navigate  = useNavigate()

  const toggleAuth=()=>{
    setIsAuth(!isAuth)
    setToken("")
    setUserName("")
    setuserDetails(null)
  }
  const handleSubmit = async (userInfo) => {
    if(isAuth) return
    try {
      const user = await axios.post("https://reqres.in/api/login", userInfo);
      setToken(user.data.token);
      setIsAuth(!isAuth);
      navigate("/")
    } catch (error) {
      console.log(error);
      setError(true)
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        handleSubmit,
        token,
        userName,
        userDetails,
        setuserDetails,
        toggleAuth,
        error
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;