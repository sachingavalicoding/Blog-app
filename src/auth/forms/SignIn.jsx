import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <div className="signin__container">
      <h2> Login </h2>
      <div className="form__container ">
        <div className="input__container">
          <input type="email" placeholder="email....." />
          <input type="password" placeholder="password....." />
        </div>
        <button className="btn "> Sign In </button>
        <p>
          {" "}
          Do not have an Account ?? <Link to="/signup"> Sign up </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default SignIn;
