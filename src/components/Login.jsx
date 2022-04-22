import React from "react";
import "../style/Login.css"
import {FaLongArrowAltRight} from "react-icons/fa";

function Login() {
  return (
    <>
      <div>
        <h1>Welcome To The Book Circle!</h1>
        <p>
          Get inspired and browse thousands of book reviews, contribute, add and
          share your own
        </p>
      </div>
      <div className="LogInBox">
        <div className="LogInCreateAccountBox">
          <div className="CreateAccountPlaceHolder">
            <h2>Create Account</h2>
            <p>
              If you don’t have an account, create one by pressing the button
              below:
            </p>
            <a href={"/createaccount"}>
              <button>Create Account</button>
            </a>
          </div>

          <div className="loginPlaceHolder">
            <h2>Login or Continue Offline</h2>
            <a href="/offline">
              <button id="exploreOffline">
                Explore Offline
                <FaLongArrowAltRight
                  size={19}
                  style={{ marginBottom: "-5px" }}
                />
              </button>
            </a>
            <form>
              <div className="InputHolder">
                <label>Username</label>
                <input name="userName"></input>
              </div>
              <div className="InputHolder">
                <label>Password</label>
                <input name="passWord"></input>
              </div>
              <div className="logInButtonPlaceHolder">
                <p>
                  Forgot Login details?<br></br>
                  <a href="/login" style={{ color: "red" }}>
                    click here
                  </a>
                </p>

                <button>
                  <a
                    href="/online"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Log in{" "}
                  </a>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
