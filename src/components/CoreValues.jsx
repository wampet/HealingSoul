/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Activity,
  Beef as Beef,
  HandHelping,
  HeartHandshake,
  Map as Map,
  PartyPopper,
  Pill,
  Shield as Shield,
} from "lucide-react";
import TwoColorHeading from "./TwoToneTitle";

const nursingHomeValues = [
  {
    name: "Compassion",
    description:
      "Compassion sits at the heart of our care philosophy, guiding our interactions with warmth and empathy. We believe every resident deserves to feel valued and understood, so we provide care that reaches beyond physical needs to touch lives, foster connections, and promote a sense of community.",
    Icon: HandHelping,
  },
  {
    name: "Integrity",
    description:
      "Integrity forms the foundation of our trustworthiness and reliability. We are steadfast in our commitment to honesty, consistently applying ethical principles across all levels of our service. From our caregivers to our administrative staff, integrity informs our decisions, ensuring accountability and fostering a reputation for excellence.",
    Icon: Activity,
  },
  {
    name: "Dignity",
    description:
      "Dignity is paramount, and we strive to uphold it in every aspect of our care. We recognize the unique story of each resident, treating everyone with the utmost respect and consideration. Personal choices, privacy, and independence are honored here, allowing residents to feel a continued sense of self-esteem and worth.",
    Icon: Pill,
  },
  {
    name: "Excellence",
    description:
      "Our pursuit of excellence is relentless. We are dedicated to delivering superior care and services, achieved through a continuous cycle of learning, improvement, and mastery. By setting high standards and reaching for outstanding outcomes, we ensure that our residents receive the best possible care available.",
    Icon: PartyPopper,
  },
  {
    name: "Safety",
    description:
      "The safety and well-being of our residents are of utmost importance, driving us to maintain a secure, risk-free environment. Our comprehensive safety protocols are designed to protect the physical and emotional health of our residents, offering peace of mind to them and their loved ones.",
    Icon:Shield ,
  },
  {
    name: "Collaboration",
    description:
      "Collaboration is the key to individualized care. We engage in meaningful partnerships with residents, families, and healthcare providers to create personalized care plans. By working together, we are able to add",
    Icon: HeartHandshake,
  },
];

const CampaignCard = ({ name, description, Icon }) => (
  <div className="flex flex-col bg-white text-gray-heading items-center rounded-xl  hover:bg-green-400 hover:text-white p-8 shadow-md transition hover:border-pink-500/10 hover:shadow-pink-500/10">
    <Icon className="w-10 h-10 text-green-500" />
    <h2 className="mt-4 text-2xl font-bold mb-2">{name}</h2>
    <p className="mt-1 text-sm text-justify">{description}</p>
  </div>
);

const CoreValues = () => {
  return (
    <section className=" text-gray-heading bg-[#F5F5F5]">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="">
          <TwoColorHeading firstWord="Our" secondWord="Values" />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {nursingHomeValues.map((campaign) => (
            <CampaignCard key={campaign.name} {...campaign} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
