import { 
    useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

const PageNotFound = () => {
    const navigate = useNavigate();
  return (
    <section className="light py-[180px] md:py-[300px] bg-white  text-zinc-900  relative z-[1]">
      <div
        className="bg-cover bg-center bg-no-repeat h-full w-[40vw] absolute top-0 left-0 hidden -z-[1] sm:block"
        style={{
          backgroundImage:
            "url(https://cdn.easyfrontend.com/pictures/httpcodes/https10.jpg)",
        }}
      ></div>
      <div className="container px-4">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-8 md:col-start-5 lg:col-span-6 lg:col-start-7 flex flex-col items-center lg:items-start">
            <h1 className="font-bold text-3xl leading-none md:text-[40px] mb-4">
              404
            </h1>
            <h1 className="font-bold text-3xl leading-none md:text-[40px] mb-4">
              Page not found
            </h1>
            <p className="text-lg opacity-80 mb-6">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="flex">
              <Button variant="green" size="xlg" onClick={()=>navigate('/')}>
                Return to homepage
              </Button>

              <button className="py-3 px-6 bg-transparent text-green-600 border border-green-600 hover:bg-green-600 hover:text-white rounded ml-2">
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
