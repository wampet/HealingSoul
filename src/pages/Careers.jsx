import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import TwoColorHeading from "../components/TwoToneTitle";

const contents = [
  {
    title: "Registered Nurse",
    desc: "We are looking for a registered nurse to join our team.",
    link: "#",
    nursingHome: "Nursing Home A",
  },
  {
    title: "Certified Nursing Assistant (CNA)",
    desc: "We are hiring certified nursing assistants (CNAs) to provide direct care to residents.",
    link: "#",
    nursingHome: "Nursing Home B",
  },
  {
    title: "Licensed Practical Nurse (LPN)",
    desc: "We are seeking licensed practical nurses (LPNs) to assist with resident care.",
    link: "#",
    nursingHome: "Nursing Home C",
  },
  {
    title: "Director of Nursing",
    desc: "We are currently seeking a director of nursing to lead our nursing team.",
    link: "#",
    nursingHome: "Nursing Home D",
  },
  {
    title: "Nurse Manager",
    desc: "We are hiring a nurse manager to oversee nursing staff and ensure quality care.",
    link: "#",
    nursingHome: "Nursing Home E",
  },
  {
    title: "Certified Medication Aide (CMA)",
    desc: "We are looking for certified medication aides (CMAs).",
    link: "#",
    nursingHome: "Nursing Home F",
  },
];

const CareerCard = ({ content }) => {
  return (
    <div className="hover:bg-green-200 block bg-white border rounded-md cursor-pointer hover:shadow-lg transition-shadow">
      <div className=" p-4 md:p-6 md:pb-8">
        <div className="flex flex-col lg:flex-row justify-between w-full">
          <div className="w-full lg:w-8/12">
            <div>
              <h5 className="text-xl leading-6 font-medium mb-2">
                {content.title}
              </h5>
            </div>
          </div>
          <div className="hidden md:block w-full lg:w-4/12 text-start lg:text-end mt-4 lg:mt-0">
            <button
              href={content.link}
              className="text-green-600 font-medium hover:text-opacity-90"
            >
              View job
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="ml-2" />
            </button>
          </div>
        </div>
        <p className="mb-2 mr-0  ">{content.desc}</p>
      </div>
    </div>
  );
};

CareerCard.propTypes = {
  content: PropTypes.object.isRequired,
};

const Careers = () => {
  return (
    <div className="max-w-screen-xl mx-5 md:mx-auto">
      <div className="py-10 sm:px-6 lg:px-8 lg:py-14 text-gray-heading">
        <div className="px-4 mx-auto">
          <div className="justify-between mx-auto mb-10">
            <div className=" md:text-start">
              <TwoColorHeading firstWord="Join our " secondWord="team" />
              <p className="mt-1 text-gray-600 dark:text-gray-heading text-xl">
                Our philosophy is simple - hire a team of passionate people that
                empowers you to do the best work
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {contents.map((content, i) => (
              <div className="col-span-2 md:col-span-1" key={i}>
                <CareerCard content={content} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
