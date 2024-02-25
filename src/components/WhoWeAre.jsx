import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

const stories = [
  {
    text: "Realizing that an organization's workforce is what makes it successful",
  },
  {
    text: "Upholding the uncompromising standard of quality in people-centered healthcare.",
  },
  {
    text: "Establishing a benchmark for excellence in the provision of healthful, high-quality care.",
  },
  {
    text: "Following the greatest ethical standards when conducting business.",
  },
  {
    text: "Upholding the confidence that our clients' relatives and friends have placed in us.",
  },
];

const StoryItem = ({ item }) => {
  const { text } = item;
  return (
    <>
      <div className="mb-2">
        <FontAwesomeIcon
          icon={faCheck}
          className="fas fa-check text-orange-400 mr-2 text-sm"
        />
        <span className="text-sm text-gray-heading">{text}</span>
      </div>
    </>
  );
};

StoryItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

const WhoWeAre = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 lg:my-10 sm:px-6 sm:py-12 lg:px-8 ">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="">
          <img
            src="https://s3.amazonaws.com/utep-uploads/wp-content/uploads/online-regis-college/2019/09/24100636/skilled-nursing-facility.jpg"
            alt=""
            className="max-w-full h-full rounded-2xl"
          />
        </div>
        <div className="">
          <h1 className="text-3xl leading-none font-bold uppercase tracking-wider mb-2 text-gray-heading">
            Who We Are
          </h1>
          <hr className="bg-green-600 h-1 rounded-[3px] w-12 opacity-100 my-6" />
          <p className=" mb-2 text-gray-heading">
            We provide unwavering commitment to client care, guided by the
            values of quality, respect, excellence, ethics, and integrity in
            order to care for our community. Furthermore, to ensure that
            everyone who entrusts us with guiding their recovery process, health
            care needs, and personalized treatment in the comfort of their home
            or place of residence receives quality-driven, patient-centered,
            integrated care, we are dedicated to
          </p>
          <ul className="flex flex-col ezy__about9-features mt-5">
            {stories.map((item, i) => (
              <li key={i}>
                <StoryItem item={item} index={i + 1} key={i} />
              </li>
            ))}
          </ul>

          <div className="mt-5">
            <Button variant="green" onClick={ ()=>navigate("/about/company-overview")}>Learn more</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
