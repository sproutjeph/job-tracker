import { Button } from "@/components/ui/button";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import { FC } from "react";

interface LandingProps {}

const Landing: FC<LandingProps> = () => {
  return (
    <div className="max-w-6xl container  h-screen overflow-hidden ">
      <nav className="my-6">
        <Logo />
      </nav>

      <div className=" flex items-center justify-center mt-80 gap-2">
        <div className="flex flex-col justify-center  gap-6 flex-1">
          <h1 className="text-4xl font-black sm:text-6xl md:text-7xl">
            Job <span className="text-primary">Tracking</span> App
          </h1>
          <p className="max-w-lg text-muted-foreground tracking-wide leading-8">
            A simple job tracking app built with React, TypeScript, and Tailwind
            CSS. This app is a demo for a job tracking app. It is not intended
            to be used in production.
          </p>
          <div className="flex gap-4">
            <Link to="/register">
              <Button>Register</Button>
            </Link>
            <Button>Login / Demo User</Button>
          </div>
        </div>
        <img
          src={main}
          alt="Job hunt"
          className="hidden lg:block h-1/3 w-1/3 object-contain"
        />
      </div>
    </div>
  );
};

export default Landing;
