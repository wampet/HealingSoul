import { Button } from "./Button";

/* eslint-disable react/no-unescaped-entities */
function CTA() {
  return (
    <div>
      <section className="text-gray-600 body-font bg-[#F5F5F5] ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Us Today!
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Call us to set a time when you can stop by to tour our facility,
              enjoy a meal and meet our wonderful staff.
            </p>
          </div>
          <div className="flex lg:w-1/3  w-full flex-col mx-auto">
            <Button variant="green" size="xlg">Request a tour </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CTA;
