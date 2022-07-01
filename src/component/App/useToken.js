import { useState } from "react";

//get login token from session storage
export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);

    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());

    //save token in the session storage
  const saveToken = (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken.token));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token,
  };
}
