import main from "../assets/images/main1.svg";
import { Logo } from "../components";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <main className="container flex flex-col justify-center p-6 mx-auto max-w-7xl">
      <nav className="w-[90vw] max-w-6xl h-[6rem] my-0 mx-auto flex items-center">
        <Logo className="" />
      </nav>
      <div className="min-h-[clac( 100vh_-_6rem)] grid items-center mt-[8.5rem] lg:grid-cols-2 gap-[3rem] lg:mt-[4rem]">
        <div className="flex flex-col gap-4">
          <h1 className="mb-8 text-5xl font-[700] capitalize">
            job <span className=" text-mainColor">Tracking</span> app
          </h1>
          <p className="max-w-xl mb-10 text-3xl leading-10 tracking-wide text-gray-600">
            Tracking Your Job Applications <br /> Has never been easy! <br />
            Let's Make It Easy For You
          </p>
          <Link
            to="/register"
            className=" px-8 py-4 text-2xl font-bold tracking-wider text-white transition-all duration-500 rounded-md bg-mainBlack hover:bg-[#292929] w-[14.5rem] "
          >
            Login/Register{" "}
          </Link>
        </div>
        <img src={main} alt="job hunt" className="w-[35rem] hidden lg:block" />
      </div>
    </main>
  );
};
export default LandingPage;
