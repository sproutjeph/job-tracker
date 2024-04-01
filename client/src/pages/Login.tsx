import { Link } from "react-router-dom";
import { FC } from "react";

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <Link to="/register">Register Page</Link>
    </div>
  );
};

export default Login;
