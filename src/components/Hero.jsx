/* eslint-disable react/no-unescaped-entities */

import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <div
      className=" bg-cover  bg-no-repeat text-white relative px-2 py-40 lg:px-12 md:py-45 z-[1]"
      style={{
        backgroundImage:
          "url(https://plus.unsplash.com/premium_photo-1661427541609-b857cb7b7a7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 bottom-0 -z-[1]"
        style={{
          background:
            "linear-gradient(130deg, rgba(13, 110, 253, 0.35), rgba(0, 0, 0, 0.631))",
        }}
      ></div>
      <div className="container px-8 lg:Px-12">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-9 lg:col-span-7 xl:col-span-6">
            <h2 className=" text-4xl  md:text-6xl font-extrabold  mb-2" >
              Delivering Care in the Way You Deserve to Receive It.
            </h2>
            <p className="text-lg leading-relaxed mb-8 md:mr-32 lg:mr-52">
              Where Compassion Meets Comfort: Our pledge is to provide care that
              honors your life's journey with the dignity, respect, and warmth
              you deserve.
            </p>
            <div className="md:mr-40 lg:mr-72" data-aos="fade-down">
              <button
                onClick={() => navigate("/contact")}
                className="py-4 px-8 text-bold text-xl text-white font-bold border-green-50 bg-green-50  hover:bg-green-800 rounded-xl w-full"
              >
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
