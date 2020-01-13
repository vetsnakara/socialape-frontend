// todo: use throttle

import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";

const useAuth = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      const persistedUser = jwtDecode(token);
      setAuthUser(persistedUser);
    } catch (error) {
      console.log("Unable to decode token", error);
    }
  }, []);

  function setAuthUserWithLocalStorage(token) {
    try {
      if (token) {
        const user = jwtDecode(token);
        localStorage.setItem("token", token);
        setAuthUser(user);
      } else {
        localStorage.removeItem("token");
        setAuthUser(null);
      }
    } catch (error) {
      console.log("Unable to decode token", error);
    }
  }

  return { authUser, setAuthUser: setAuthUserWithLocalStorage };
};

export default useAuth;
