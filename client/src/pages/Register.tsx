import { Link } from "react-router-dom";
import { FC } from "react";

interface RegisterProps {}

const Register: FC<RegisterProps> = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <Link to="/Login">Login Page</Link>
    </div>
  );
};

export default Register;
