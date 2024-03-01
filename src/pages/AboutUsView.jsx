import Banner from "../components/Banner";
import CoreValues from "../components/CoreValues";
import TwoColorHeading from "../components/TwoToneTitle";

/* eslint-disable react/prop-types */
function AboutUsView() {
  return (
    <div>
      <Banner
        title="Company Overview"
        subtitle="Home > Company Overview"
        backgroundImage="https://cdn2.hubspot.net/hubfs/747395/How%20to%20Find%20the%20Right%20Assisted%20Senior%20Living%20in%20Greenville%20SC.jpg"
      />
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
          <TwoColorHeading firstWord="About" secondWord="Us" />
          <p className="text-gray-heading mt-2">
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
          <p className="text-gray-heading mt-2">
            Upholding the uncompromising standard of quality in people-centered
            healthcare.
          </p>
        </div>
        <div className="">
          <TwoColorHeading firstWord="Our" secondWord="Vision" />
          <p className="text-gray-heading mt-2">
            We provide unwavering commitment to client care, guided by the
            values of quality, respect, excellence, ethics, and integrity in
            order to care for our community.
          </p>
        </div>
      </div>
    </section>
  );
};
