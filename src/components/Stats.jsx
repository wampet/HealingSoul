/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import Counter from "react-number-counter";

const Stats = () => {
  return (
    <section className=" py-14 md:py-24 ">
      <div className=" px-4 text-gray-heading ">
        <div className="bg-[#f4fdef]  rounded-3xl overflow-hidden">
          <div className="flex flex-col-reverse lg:flex-row">
            <div className="lg:w-1/2 bg-[#f4fdef] text-center p-2">
              <img
                src="https://images.pexels.com/photos/7551623/pexels-photo-7551623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="max-w-full h-full rounded-3xl "
              />
            </div>
            <div className="lg:w-1/2">
              <div className="flex flex-col justify-center h-full py-12 px-6 sm:px-12">
                <div>
                  <h2 className="text-2xl md:text-[40px] leading-none font-bold mb-6">
                    We are deeply committed to our community, providing
                    unwavering and exceptional care to our clients.
                  </h2>
                  <p className="text-md opacity-80 mb-12 lg:mr-12">
                    Our primary goal is to assist our residents in regaining
                    their optimal functional abilities. We offer specialized
                    physical, occupational, and speech therapy, carefully
                    customized to meet the individual requirements of each
                    resident.
              
                  </p>
                  <div className="flex justify-between gap-4 flex-nowrap">
                    {counters.map((counter, index) => (
                      <CounterSection key={index} {...counter} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

const counters = [
  { label: "Happy People", start: 80, end: 180, delay: 100 },
  { label: "Skilled Physician", start: 2, end: 50, delay: 100 },
  { label: "Senior Services", start: 0, end: 10, delay: 200 },
];
function CounterSection({ label, start, end, delay }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-orange-600 font-bold md:font-extrabold text-5xl">
        <Counter start={start} end={end} delay={delay} preFix="+" />
      </span>
      <span className="text-gray-heading text-xl font-medium mt-2">{label}</span>
    </div>
  );
}
