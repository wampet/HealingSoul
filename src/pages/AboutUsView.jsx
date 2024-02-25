import CoreValues from "../components/CoreValues";
import TwoColorHeading from "../components/TwoToneTitle";

/* eslint-disable react/prop-types */
function AboutUsView() {
  return (
    <div>
      {/* <AboutUs /> */}
      <Stuff />
      <CoreValues />
    </div>
  );
}

export default AboutUsView;


const Stuff = () => {
  return (
    <section className=" text-gray-heading">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 ">
        <div className="mb-10">
          <TwoColorHeading firstWord="Our" secondWord="Story" />
          <p className="text-gray-heading">
            We provide unwavering commitment to client care, guided by the
            values of quality, respect, excellence, ethics, and integrity in
            order to care for our community. Furthermore, to ensure that
            everyone who entrusts us with guiding their recovery process, health
            care needs, and personalized treatment in the comfort of their home
            or place of residence receives quality-driven, patient-centered,
            integrated care, we are dedicated to
          </p>
        </div>
        <div className="mb-10">
          <TwoColorHeading firstWord="Mission" secondWord="Statement" />
          <p className="text-gray-heading">
            Upholding the uncompromising standard of quality in people-centered
            healthcare.
          </p>
        </div>
        <div className="">
          <TwoColorHeading firstWord="Our" secondWord="Vision" />
          <p className="text-gray-heading">
            We provide unwavering commitment to client care, guided by the
            values of quality, respect, excellence, ethics, and integrity in
            order to care for our community.
          </p>
        </div>
      </div>
    </section>
  );
};
