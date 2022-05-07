import { Link } from "react-router-dom";
import ErrorImg from "../assets/images/not-found.svg";
const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
      <img className="w-[40rem]" src={ErrorImg} alt="error page img" />
      <h1 className="mt-2 mb-4 text-2xl">Ohh! Page Not Found</h1>
      <p className="text-sm">
        We can't seem to find the page you're looking for
      </p>
      <Link className="text-xl underline text-mainColor" to="/">
        Back Home
      </Link>
    </div>
  );
};
export default Error;
