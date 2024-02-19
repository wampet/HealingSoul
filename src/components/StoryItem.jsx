/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function StoryItem({item}) {
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
}

export default StoryItem;


  StoryItem.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
  };
  