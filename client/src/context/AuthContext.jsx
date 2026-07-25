import { createContext, useContext, useState } from "react";

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

  const savedUser = localStorage.getItem("user");

const [user, setUser] = useState(
  savedUser && savedUser !== "undefined"
    ? JSON.parse(savedUser)
    : null
);


  const login = (data) => {

    localStorage.setItem(
      "token",
      data.token
    );

    localStorage.setItem(
      "user",
      JSON.stringify(data.user)
    );

    setUser(data.user);
  };


  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);
  };


  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};



export const useAuth = () => {
  return useContext(AuthContext);
};