/* eslint-disable @typescript-eslint/no-explicit-any */
import SubmitButton from "@/components/SubmitButton";
import { Link, Form } from "react-router-dom";
import { Card } from "@/components/ui/card";
import FormRow from "@/components/FormRow";
import Logo from "@/components/Logo";

export const registerAction = async ({ request }: any) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
};

const Register = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="w-full max-w-md mx-auto p-8 border-t-4  border-t-primary justify-center items-center flex flex-col shadow-md">
        <Logo />
        <h1 className="my-4 text-xl tracking-wider">Register</h1>

        <Form className="w-full space-y-6" method="post">
          <FormRow labelText="Name" name="name" type="text" />
          <FormRow labelText="Last Name" name="lasNname" type="text" />
          <FormRow labelText="Location" name="location" type="text" />
          <FormRow labelText="Email" name="email" type="email" />
          <FormRow labelText="Password" name="password" type="password" />

          <SubmitButton />
          <div className="flex items-center gap-1 justify-center">
            <p>Already have an account?</p>
            <Link to="/login" className="text-primary">
              Login
            </Link>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Register;
