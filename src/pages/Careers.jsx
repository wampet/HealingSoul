
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

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
    <div className="bg-[#e2f0e8] rounded-xl hover:bg-green-300">
      <div className="flex p-4 md:p-6 md:pb-8">
        <div className="grid grid-cols-12 gap-2 justify-between">
          <div className="col-span-12 lg:col-span-8">
            <h5 className="text-xl leading-6 font-medium mb-2">
              {content.title}
            </h5>
            <p className="opacity-80 mb-2 mr-0 lg:mr-6">{content.desc}</p>
          </div>
          <div className="col-span-12 lg:col-span-4 text-start lg:text-end">
            <button
              href={content.link}
              className="text-green-600 font-medium hover:text-opacity-90"
            >
              View job
              <FontAwesomeIcon icon={faArrowAltCircleRight} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

CareerCard.propTypes = {
  content: PropTypes.object.isRequired,
};

const Careers = () => {
  return (
   <div className="max-w-screen-xl mx-10">
     <div className="py-14 md:py-24 text-gray-heading">
      <div className="px-4 mx-auto">
        <div className="grid grid-cols-12 justify-between gap-4 max-w-7xl mx-auto">
          <div className="col-span-12 md:col-span-10 text-center md:text-start">
            <h1 className="text-[32px] md:text-[45px] leading-none font-bold mb-4 ">
              Join our team
            </h1>
            <p className="font-medium ">
              Our philosophy is simple - hire a team of diverse, passionate
              people and faster a culture that empowers you to do the best work
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-12 md:mt-14">
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

export default Careers
