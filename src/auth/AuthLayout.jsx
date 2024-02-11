import "./auth.css";
import SignIn from "./forms/SignIn";
import SignUp from "./forms/SignUp";
const AuthLayout = () => {
  const Logined = true;
  return (
    <div className="auth__container">
      {Logined ? (
        <SignIn loginState={Logined} />
      ) : (
        <SignUp loginState={Logined} />
      )}
      <div className="authimg"></div>
    </div>
  );
};

export default AuthLayout;
