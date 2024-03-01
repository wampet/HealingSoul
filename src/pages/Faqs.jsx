import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { Button } from "../components/Button";
import Banner from "../components/Banner";
import { useNavigate } from "react-router-dom";

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

const FaqItem = ({ faq, isOpen, toggleFaq }) => {
  return (
    <div className={`faq-item ${isOpen ? "active" : ""}`}>
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
        className={`faq-answer ${
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
  isOpen: PropTypes.bool.isRequired,
  toggleFaq: PropTypes.func.isRequired,
};

const Faqs = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section>
      <Banner
        title="Frequently Asked Questions"
        subtitle="You’ve got questions. We’ve got answers. If this page doesn’t
        solve your concerns, please call us and we’ll do our best to
        help you."
        backgroundImage="https://cdn2.hubspot.net/hubfs/747395/How%20to%20Find%20the%20Right%20Assisted%20Senior%20Living%20in%20Greenville%20SC.jpg"
      />

      <div className="py-14 md:py-20 bg-[#F5F5F5]">
        <div className=" px-8 md:px-8 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-14">
            <div className="col-span-1 md:col-span-10 md:col-start-2">
              <div className="bg-white shadow dark:shadow-none p-8">
                {faqList.map((faq, i) => (
                  <FaqItem
                    faq={faq}
                    key={i}
                    isOpen={activeIndex === i}
                    toggleFaq={() => toggleFaq(i)}
                  />
                ))}

                <div className="py-10">
                  <Button
                    onClick={() => navigate("/contact")}
                    variant="green"
                    size="xlg"
                    className="w-full"
                  >
                    Contact us for any questions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Faqs.propTypes = {
  faqList: PropTypes.array.isRequired,
};

export default Faqs;
