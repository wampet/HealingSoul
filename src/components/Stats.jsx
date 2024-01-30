import { Button } from "./Button";

/* eslint-disable react/no-unescaped-entities */
function Stats() {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="House"
                  src="https://images.pexels.com/photos/7551623/pexels-photo-7551623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl">
                We are deeply committed to our community, providing unwavering and exceptional care to our clients.
                </h2>

                <p className="my-4 text-gray-600">
                  Our primary goal is to assist our residents in regaining their
                  optimal functional abilities. We offer specialized physical,
                  occupational, and speech therapy, carefully customized to meet
                  the individual requirements of each resident. From the very
                  first day of admission, we initiate a tailored rehabilitation
                  screening process. Upholding our residents' privacy is of
                  utmost importance to us. We take pride in being among the
                  select few facilities that provide exclusively private rooms
                  for our residents.
                </p>
                <Button variant="green" size="xlg" className="mt-5 "> Get in Touch</Button>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Stats;
