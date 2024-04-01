import { FC } from "react";
import { Link, useRouteError } from "react-router-dom";

interface ErrorProps {}

const Error: FC<ErrorProps> = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Error Page</h1>
      <Link to="/">Back Home</Link>
    </div>
  );
};

export default Error;
