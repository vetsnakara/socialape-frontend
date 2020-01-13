import React, { useContext } from "react";
import useAuth from "../hooks/useAuth";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const { authUser, setAuthUser } = useAuth();

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const withAuth = Component => props => {
  const { authUser, setAuthUser } = useContext(AuthContext);
  return <Component {...props} user={authUser} setAuthUser={setAuthUser} />;
};

export default AuthProvider;
