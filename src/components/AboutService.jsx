/* eslint-disable react/prop-types */

import { Button } from './Button';
import StoryItem from './StoryItem'; 

const AboutService = ({ imageUrl, heading, paragraph, stories }) => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 lg:my-10 sm:px-6 sm:py-12 lg:px-8 ">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      
        <div className="">
          <h1 className="text-3xl leading-none font-bold uppercase tracking-wider mb-2 text-gray-heading">
            {heading}
          </h1>
          <hr className="bg-green-600 h-1 rounded-[3px] w-12 opacity-100 my-6" />
          <p className="mb-2 text-gray-heading">
            {paragraph}
          </p>
          <ul className="flex flex-col ezy__about9-features mt-5">
            {stories.map((item, index) => (
              <li key={index}>
                <StoryItem item={item} index={index + 1} />
              </li>
            ))}
          </ul>

          <div className="mt-5">
            <Button variant="green">Learn more</Button>
          </div>
        </div>
        <div className="">
          <img
            src={imageUrl}
            alt=""
            className="max-w-full h-full rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutService;
