import { useState } from "react";
import { Link } from "react-router-dom";
const SignIn = () => {
  const signin = () => {
    console.log("Sign in ");
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="signin__container">
      <h2> Login </h2>
      <div className="form__container ">
        <div className="input__container">
          <input
            type="email"
            placeholder="email....."
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="password....."
            onChange={(e) => setPassword(e.target.value)}
            min={4}
            max={16}
            value={password}
          />
        </div>
        <button onClick={signin} className="btn  ">
          {" "}
          Sign In{" "}
        </button>
        <p>
          {" "}
          Do not have an Account ?? <Link to="/signup"> Sign up </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default SignIn;
