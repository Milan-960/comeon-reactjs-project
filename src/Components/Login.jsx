import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Logo from "../Assets/images/logo.svg";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/login", {
        username,
        password,
      });

      if (response.data.status === "success") {
        navigate("/casino");
      } else {
        setErrorMessage(response.data.error);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Login failed");
    }
  };

  return (
    <>
      <div class="ui one column center aligned page grid">
        <div class="column twelve wide">
          <img src={Logo} alt="logo" />
        </div>
      </div>

      <div className="main container">
        <div className="login">
          <div className="ui grid centered">
            <form onSubmit={handleSubmit}>
              <div className="fields">
                <div className="required field">
                  <div className="ui icon input">
                    <input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                      name="username"
                      placeholder="Username"
                    />
                    <i className="user icon"></i>
                  </div>
                </div>

                <div className="required field">
                  <div className="ui icon input">
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                    <i className="lock icon"></i>
                  </div>
                </div>
                <div>
                  {errorMessage && (
                    <span className="ui red message">
                      Player does not exist or wrong password
                    </span>
                  )}
                </div>
                <div className="field">
                  <div className="ui icon input">
                    <input type="submit" value="Login" />
                    <i className="right chevron icon"></i>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
