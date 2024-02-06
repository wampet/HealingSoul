import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { Button } from "../components/Button";

const faqList = [
  {
    isActive: true,
    question: "What types of care services does our nursing home provide?",
    answer:
      "Our nursing home offers a comprehensive range of services including long-term elderly care, rehabilitation services, specialized care for veterans, dementia care, and respite care. Our aim is to cater to the diverse needs of our residents with compassion and professionalism.",
  },
  {
    isActive: false,
    question: "How do we ensure the quality of care for residents?",
    answer:
      "Quality care is our top priority. We have a team of skilled and compassionate healthcare professionals who undergo regular training. We also maintain a high staff-to-resident ratio to ensure personalized attention, and we regularly evaluate our care plans to meet the changing needs of our residents.",
  },
  {
    isActive: false,
    question: "Are family members allowed to visit residents?",
    answer:
      "Absolutely. We encourage family involvement and believe it's crucial for the well-being of our residents. We have flexible visiting hours and offer various amenities to make your visits comfortable and enjoyable.",
  },
  {
    isActive: false,
    question: "What rehabilitation services do we offer?",
    answer:
      "Our rehabilitation services include physical therapy, occupational therapy, speech therapy, and post-operative care, all tailored to help residents regain their independence and improve their quality of life.",
  },
  {
    isActive: false,
    question: "How do we support veterans in our care?",
    answer:
      "We provide specialized care for veterans, recognizing their unique needs. This includes assistance with VA benefits, access to veteran-specific healthcare services, and activities geared towards veterans' interests and experiences.",
  },
  {
    isActive: false,
    question: "Can residents personalize their living spaces?",
    answer:
      "Yes, we encourage residents to personalize their rooms to make them feel more like home. They can bring in personal items such as photos, mementos, and small pieces of furniture, as long as they comply with safety standards.",
  },
  {
    isActive: false,
    question: "What activities and amenities are available for residents?",
    answer:
      "We offer a wide range of activities including social events, fitness programs, arts and crafts, games, and outings. Our amenities include comfortable common areas, a library, a garden, and dining services catering to various dietary needs.",
  },
];

const FaqItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(faq.isActive || false);

  const toggleFaq = () => setIsOpen(!isOpen);

  return (
    <div className={isOpen && "active"}>
      <a
        href="#!"
        className="btn px-0 py-4 w-full text-start flex justify-between items-center"
        onClick={toggleFaq}
      >
        <span className="text-gray-heading font-medium text-lg">
          {faq.question}
        </span>
        <FontAwesomeIcon
          className="text-gray-heading"
          icon={isOpen ? faChevronUp : faChevronDown}
        />
      </a>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } border-l-2 border-green-600 mb-4`}
      >
        <div className="px-6">
          <p className="text-gray-600">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

FaqItem.propTypes = {
  faq: PropTypes.object.isRequired,
};

const Faqs = () => {
  return (
    <section className="  py-14 md:py-4  bg-[#F5F5F5] ">
      <div className="container px-4 md:px-8 lg:px-20">
        <div className="grid grid-cols-12 justify-center mb-12">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:px-11 text-center">
            <h2 className="font-bold text-gray-heading text-[25px] md:text-[45px] leading-none mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg opacity-80 text-gray-heading">
            You’ve got questions. We’ve got answers. If this page doesn’t solve your concerns, please call us and we’ll do our best to help you.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-12">
          <div className="col-span-1 md:col-span-8 md:col-start-3">
            <div className="bg-white shadow dark:shadow-none  p-6">
              {faqList.map((faq, i) => (
                <FaqItem faq={faq} key={i} />
              ))}

              <div className="py-10">
                <Button variant="green" size="xlg" className=" w-full">
        
                  Contact us for any questions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
