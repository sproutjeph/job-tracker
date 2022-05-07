import { useState, useEffect } from "react";
import { FormRow, Logo, Alert } from "../components";
import { useGlobalContext } from "../store/context";
import { useNavigate } from "react-router-dom";

const userInput = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};
const Register = () => {
  const navigate = useNavigate();
  const { showAlert, displayAlert, registerUser, isLoading, user, loginUser } =
    useGlobalContext();
  const [values, setValues] = useState(userInput);

  const toggleMember = () => {
    setValues((prev) => ({ ...prev, isMember: !values.isMember }));
  };

  const handleChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { email, name, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    const currentUser = { name, email, password };
    if (isMember) {
      loginUser(currentUser);
    } else {
      registerUser(currentUser);
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);
  return (
    <div className="flex flex-col justify-center h-screen">
      <form
        onSubmit={onSubmit}
        className="w-[90vw] max-w-[500px] bg-white p-[2rem] my-[3rem] mx-auto shadow-md border-t-4 border-mainBlack rounded-md"
      >
        {showAlert && <Alert />}
        <div className="flex flex-col items-center justify-center">
          <Logo />
          <h3 className="m-4 text-2xl">
            {values.isMember ? "Login" : "Register"}
          </h3>
        </div>

        {!values.isMember && (
          <FormRow
            value={values.name}
            handleChange={handleChange}
            name="name"
            type="text"
            labelText="Name"
          />
        )}

        <FormRow
          value={values.email}
          handleChange={handleChange}
          name="email"
          type="email"
          labelText="Email"
        />
        <FormRow
          value={values.password}
          handleChange={handleChange}
          name="password"
          type="password"
          labelText="Password"
        />

        <button
          className={`${
            isLoading && "cursor-wait"
          } cursor-pointer text-white bg-mainBlack border-transparent rounded-md tracking-wider py-[0.375rem] px-[0.75rem] shadow-md inline-block w-full hover:bg-[#292929]  transition-all duration-200`}
          type="submit"
          disabled={isLoading}
        >
          Submit
        </button>
        <p className="mt-4 text-center ">
          {values.isMember ? "Not a Member yet?" : "Already a member"}{" "}
          <button
            className="font-black tracking-widest text-mainColor"
            type="button"
            onClick={toggleMember}
          >
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </div>
  );
};
export default Register;
