import { useState } from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
  const signup = () => {
    console.log("SIgn up");
  };
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="signin__container">
      <h2> Sign Up </h2>
      <div className="form__container ">
        <div className="input__container">
          <input
            type="text"
            placeholder="username....."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="phoneno.... "
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
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
        <button onClick={signup} className="btn ">
          {" "}
          Sign Up{" "}
        </button>
        <p>
          {" "}
          Already have an account ?? <Link to={"/signin"}> Sign in </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default SignUp;
