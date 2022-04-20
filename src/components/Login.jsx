import React from "react";
import "../style/Login.css"

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
      <div className="LogInCreateAccountBox">
      
          <div class="CreateAccountPlaceHolder">
            <h2>Create Account</h2>
            <p></p>
            <button>Create Account</button>
          </div>

          <div className="loginPlaceHolder">
            <h2>Login or Continue Offline</h2>
            <form>
              <div className="InputHolder">
                <label for="userName">Username</label>
                <input name="userName"></input>
              </div>
              <div className="InputHolder">
                <label for="passWord">Password</label>
                <input name="passWord"></input>
              </div>
              <div className="logInButtonPlaceHolder">
                <p>
                  Forgot Login details?<p style={{color:"red"}}>click here</p>
                </p>
                <button>Log in</button>
              </div>
            </form>
            </div>
      </div>
    </>
  );
}

export default Login;
