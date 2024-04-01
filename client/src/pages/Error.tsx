/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useRouteError } from "react-router-dom";
import ErrorImage from "../assets/images/not-found.svg";
import { Button } from "@/components/ui/button";

const Error = () => {
  const error: unknown | any = useRouteError();

  if (error.status === 404) {
    return (
      <div className="h-screen flex items-center justify-center mx-4 flex-col">
        <img
          src={ErrorImage}
          alt="not found image"
          className="h-[500px] w-[500px]"
        />

        <div className="flex flex-col justify-center">
          <h1 className="text-xl font-extrabold">Ohh! Page Not Found</h1>
          <p className="text-muted-foreground">
            we can't seem to find the page you are looking for
          </p>
          <Link to="/" className="text-center text-primary mt-2 ">
            <Button variant="link" size="lg" className="text-lg">
              Back Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>Something went wrong</h1>
      <Link to="/">Back Home</Link>
    </div>
  );
};

export default Error;
