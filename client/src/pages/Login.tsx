import SubmitButton from "@/components/SubmitButton";
import { Button } from "@/components/ui/button";
import { Link, Form } from "react-router-dom";
import { Card } from "@/components/ui/card";
import FormRow from "@/components/FormRow";
import Logo from "@/components/Logo";

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="w-full max-w-md mx-auto p-8 border-t-4  border-t-primary justify-center items-center flex flex-col shadow-md">
        <Logo />
        <h1 className="my-4 text-xl tracking-wider">Register</h1>

        <Form className="w-full space-y-6" method="post">
          <FormRow labelText="Email" name="name" type="text" />
          <FormRow labelText="Password" name="password" type="password" />

          <SubmitButton />
          <Button className="w-full" variant="secondary">
            Explore The App
          </Button>
          <div className="flex items-center gap-1 justify-center">
            <p>Already have an account?</p>
            <Link to="/register" className="text-primary">
              Register
            </Link>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
