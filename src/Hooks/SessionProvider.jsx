import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SessionContext = React.createContext(null);

const SessionProvider = ({ children }) => {
  const navigate = useNavigate();

  // storing the user in the localstorage
  const [userSession, setUserSession] = useState(
    JSON.parse(localStorage.getItem("userSession"))
  );
  const [isAuthenticated, setIsAuthenticated] = useState(!!userSession);
  const [errorMessage, setErrorMessage] = useState("");

  // login ajax call
  const handleLogin = async (username, password) => {
    try {
      const response = await axios.post("http://localhost:3001/login", {
        username,
        password,
      });
      console.log("response", response);
      if (response.data.status === "success") {
        setUserSession(response.data.player);
        setIsAuthenticated(true);
        localStorage.setItem(
          "userSession",
          JSON.stringify(response.data.player)
        );
        navigate("/games-list");
      } else {
        setErrorMessage(response.data.error);
      }
    } catch (error) {
      console.log("error", error);
      if (error.response) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage("An error occurred.");
      }
    }
  };

  // logout ajax call
  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:3001/logout", {
        username: userSession.username,
      });
    } catch (error) {
      console.error(error);
    }

    setUserSession(null);
    setIsAuthenticated(false);
    localStorage.removeItem("userSession");
    navigate("/");
  };

  const checkAuth = () => {
    if (!isAuthenticated) {
      navigate("/");
    }
  };

  return (
    <SessionContext.Provider
      value={{
        userSession,
        errorMessage,
        handleLogin,
        handleLogout,
        isAuthenticated,
        checkAuth,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export { SessionProvider, SessionContext };
