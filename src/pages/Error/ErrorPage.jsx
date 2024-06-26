import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className=" flex items-center justify-center h-[80vh]">
      <section className="flex items-center p-16 justify-center">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn{"'"}t find this page.
            </p>
            <p className="mt-4 mb-8 text-gray-700">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link to={"/"}>
              <Button size="lg" color="red">
                Back to home page
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
