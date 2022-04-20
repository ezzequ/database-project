

function Login() {
  return (
    <>
      <div>
        <p>hej hej logga in här</p>
      </div>
      <div>
        <form>
          <div>
            <label for="userName">User Name</label>
            <input name="userName"></input>
          </div>
          <div>
            <label for="passWord">Password</label>
            <input name="passWord"></input>
          </div>
          <button>log in</button>
          <button>create account</button>
        </form>
      </div>
    </>
  );
}

export default Login;
