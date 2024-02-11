import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="signin__container">
      <h2> Sign Up </h2>
      <div className="form__container ">
        <div className="input__container">
          <input type="text" placeholder="username....." />
          <input type="email" placeholder="email....." />
          <input type="tel" placeholder="phoneno.... " />
          <input type="password" placeholder="password....." />
        </div>
        <button className="btn "> Sign Up </button>
        <p>
          {" "}
          Already have an account ?? <Link to={"/signin"}> Sign in </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default SignUp;
