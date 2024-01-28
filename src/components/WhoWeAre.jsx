import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

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
      <div className="mb-4">
        <FontAwesomeIcon
          icon={faCheck}
          className="fas fa-check text-red-600 mr-2 text-sm"
        />
        <span className="opacity-75 text-sm text-gray-500">{text}</span>
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
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 ">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="">
          <div className="mt-12 ">
            <img
              src="https://images.pexels.com/photos/2447525/pexels-photo-2447525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="max-w-full h-full rounded-2xl"
            />
          </div>
        </div>
        <div className="">
          <h6 className="font-medium opacity-70 mb-2">Hello Visitor,</h6>
          <h1 className="text-3xl leading-none font-bold uppercase tracking-wider mb-2 text-black">
            Who We Are
          </h1>
          <hr className="bg-red-600 h-1 rounded-[3px] w-12 opacity-100 my-6" />
          <p className="opacity-70 mb-2 text-black">
            Guided by the principles of quality, respect, excellence, ethics and
            integrity, we care for our community through uncompromised
            Dedication to client care. In addition, in order to provide quality
            driven, patient centered, integrated care to all who entrust us to
            guide their healing process, health care needs, and individualized
            care in the comfort of their home or place of residence, we are
            committed t0
          </p>
          <ul className="flex flex-col ezy__about9-features mt-5">
            {stories.map((item, i) => (
              <li key={i}>
                <StoryItem item={item} index={i + 1} key={i} />
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <button className="bg-green-900 text-white hover:bg-opacity-90 rounded-md px-5 py-2 transition">
              Learn More
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default WhoWeAre;
