import { useState } from "react";
import { Alert, FormRow } from "../../components";
import { useGlobalContext } from "../../store/context";

const Profile = () => {
  const { user, displayAlert, showAlert, isLoading, updateUser } =
    useGlobalContext();

  const userInput = {
    name: user.name,
    email: user.email,
    lastName: user.lastName,
    location: user.location,
  };

  const [values, setValues] = useState(userInput);

  const handleChange = (e: any) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!values.name || !values.email || !values.lastName || !values.location) {
      displayAlert();
      return;
    }
    updateUser({
      name: values.name,
      email: values.email,
      lastName: values.lastName,
      location: values.location,
    });
  };
  return (
    <section className="rounded-sm w-full bg-w py-12 pl-8  shadow-sm bg-white">
      <form
        className="m-0 rounded-none shadow-none p-4 max-w-full w-full"
        onSubmit={handleSubmit}
      >
        <h3 className="mt-0 text-3xl capitalize tracking-wider mb-4">
          profile
        </h3>
        {showAlert && <Alert />}
        <div className="lg:grid grid-cols-2 items-center gap-4">
          <FormRow
            type="text"
            name="name"
            placeholder={values.name}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            labelText="last name"
            name="lastName"
            placeholder={values.lastName}
            handleChange={handleChange}
          />
          <FormRow
            type="email"
            name="email"
            placeholder={values.email || "email"}
            handleChange={handleChange}
          />
          <FormRow
            type="text"
            name="location"
            placeholder={values.location}
            handleChange={handleChange}
          />
          <button
            className="bg-mainColor border-transparent text-white rounded-sm tracking-wide shadow-sm py-[0.375rem] px-[0.75rem] inline-block capitalize btn-block w-full hover:bg-mainColorDark transition duration-500"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Please Wait..." : "save changes"}
          </button>
        </div>
      </form>
    </section>
  );
};
export default Profile;
