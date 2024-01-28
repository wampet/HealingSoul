import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { Button } from "../components/Button";

const faqList = [
  {
    isActive: true,
    question: "What is Easy Frontend?",
    answer:
      "First and foremost, finding experienced and compassionate caregivers who are the right fit for your family is key to an experience that surpasses expectations. This is not only to meet basic needs, but also to engage in meaningful relationships which are the crux of having a positive impact on your loved one’s life. Whether for just a few hours or for continuous care, we are fully committed to matching your loved one’s needs and preferences with professionals who have the necessary education, experience, personality, and presentation.",
  },
  {
    isActive: false,
    question: "Who is Easy Frontend for?",
    answer:
      "Having a seasoned nurse manager that fully understands your condition ensures that your needs are being met and that all members of your health care team are kept up to date. Dedicated Home Care Services routinely goes well above and beyond the industry standards for supervision and visits to our clients. Through these frequent visits and collaborations with your physician and other key professionals, we aim to be proactive, staying ahead of subtle changes that can often lead to frustrating emergency room visits.",
  },
  {
    isActive: false,
    question: "How does Easy Frontend work?",
    answer:
      "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
  },
  {
    isActive: false,
    question: "How often does your team upload resources?",
    answer:
      "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
  },
  {
    isActive: false,
    question: "Can I get a refund if I cancel my subscription?",
    answer:
      "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
  },
  {
    isActive: false,
    question: "Can I use Easy Frontend designs in my portfolio?",
    answer:
      "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
  },
  {
    isActive: false,
    question: "Can I buy Easy Frontend extended license?",
    answer:
      "When it comes to booking a holiday, we know everyone likes something different - so we've designed our getaways with you in mind. When it comes to booking a holiday, we know everyone likes something different.",
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
        <span className="text-black font-medium text-lg">{faq.question}</span>
        <FontAwesomeIcon
          className="text-black"
          icon={isOpen ? faChevronUp : faChevronDown}
        />
      </a>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } border-l-2 border-blue-600 mb-4`}
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

const WhyUs = () => {
  return (
    <section className=" light py-14 md:py-24 bg-white dark:bg-[#F5F5F5] text-zinc-900 dark:text-white">
      <div className="container px-4 md:px-8 lg:px-20">
        <div className="grid grid-cols-12 justify-center mb-12">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3 xl:px-11 text-center">
            <h2 className="font-bold text-black text-[25px] md:text-[45px] leading-none mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg opacity-70 text-gray-500">
              Assumenda non repellendus distinctio nihil dicta sapiente,
              quibusdam maiores, illum at, aliquid blanditiis eligendi
              qui.Assumenda non repellendus distinctio nihil dicta sapiente,
              quibusdam maiores
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-12">
          <div className="col-span-1 md:col-span-8 md:col-start-3">
            <div className="bg-white shadow dark:shadow-none  p-6">
              {faqList.map((faq, i) => (
                <FaqItem faq={faq} key={i} />
              ))}

              <Button variant="outline"> View All FAQs</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
