import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";

const stories = [
  {
    text: "Acknowledging that the employees of an organization create its success",
  },
  {
    text: "Maintaining no-compromise standard of excellence in healthcare and people care.",
  },
  {
    text: "Setting a standard of excellence in the delivery of quality and wholesome care",
  },
  {
    text: "Find more creative ideas for your projects",
  },
  {
    text: "Faucibus porta lacus fringilla vel",
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
            Guided by the principles of quality, respect, excellence, ethics and
            integrity, we care for our community through uncompromised
            Dedication to client care. In addition, in order to provide quality
            driven, patient centered, integrated care to all who entrust us to
            guide their healing process, health care needs, and individualized
            care in the comfort of their home or place of residence, we are
            committed to
          </p>
          <ul className="flex flex-col ezy__about9-features mt-5">
            {stories.map((item, i) => (
              <li key={i}>
                <StoryItem item={item} index={i + 1} key={i} />
              </li>
            ))}
          </ul>

          <div className="mt-5">
            <Button variant="green">Learn more</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
