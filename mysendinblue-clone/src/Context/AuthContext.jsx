import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

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

  const toggleAuth=()=>{
    setIsAuth(!isAuth)
    setToken("")
    setUserName("")
    setuserDetails(null)
  }
  const handleSubmit = async (userInfo) => {
    const { userName, email, password } = userInfo;
    if(isAuth) return
    try {
      const user = await axios.post("https://reqres.in/api/login", {
        email: email,
        password: password,
      });
      setToken(user.data.token);
      setUserName(userName);
      setIsAuth(!isAuth);
    } catch (error) {
      console.log(error);
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
        toggleAuth
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;