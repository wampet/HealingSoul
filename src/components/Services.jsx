import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const blogs = [
  [
    {
      img: "https://cdn.easyfrontend.com/pictures/courses/courses_1_1.png",
      category: "Marketing",
      title: "The Complete Digital Marketing Guide Course",
      text: "Some quick example text to build on the card the bulk content...",
      authorImg: "https://cdn.easyfrontend.com/pictures/users/user5.jpg",
      author: "John Smith",
    },
    {
      img: "https://cdn.easyfrontend.com/pictures/courses/courses_1_2.png",
      category: "SEO",
      title: "How I’m Styling Everyday Black Outfits with leather jeans",
      text: "Viverra tellus in hac habitasse platea dictumst. Sollicitudin tempor id eu nisl.",
      authorImg: "https://cdn.easyfrontend.com/pictures/users/user28.jpg",
      author: "Jos Smith",
    },
    {
      img: "https://cdn.easyfrontend.com/pictures/courses/courses_1_3.png",
      category: "Agency",
      title: "Long lasting fall scent for women sale offer only in this week!",
      text: "More off this less hello salamander lied porpoise much over tightly circa horse taped.",
      authorImg: "https://cdn.easyfrontend.com/pictures/users/user2.jpg",
      author: "Alex Hales",
    },
  ],
  [
    {
      img: "https://cdn.easyfrontend.com/pictures/courses/courses_1_3.png",
      category: "Marketing",
      title: "The Complete Digital Marketing Guide Course",
      text: "Some quick example text to build on the card the bulk content...",
      authorImg:
        "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg",
      author: "John Smith",
    },
    {
      img: "https://cdn.easyfrontend.com/pictures/courses/courses_1_2.png",
      category: "Marketing",
      title: "The Complete Digital Marketing Guide Course",
      text: "Some quick example text to build on the card the bulk content...",
      authorImg:
        "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_2.jpeg",
      author: "John Smith",
    },
    {
      img: "https://cdn.easyfrontend.com/pictures/courses/courses_1_1.png",
      category: "Marketing",
      title: "The Complete Digital Marketing Guide Course",
      text: "Some quick example text to build on the card the bulk content...",
      authorImg:
        "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_3.jpeg",
      author: "John Smith",
    },
  ],
];

const BlogItem = ({ blog }) => {
  const { title, text,  img } = blog;
  return (
    <div className="bg-gray-100  rounded-lg overflow-hidden h-full">
      <div className="relative">
        <img src={img} className="w-full" alt="..." />
      </div>
      <div className="p-4 pb-4">
        <a href="#!">
          <h5 className="text-black text-[19px] font-medium leading-6 hover:text-red-600 mb-2">
            {title}
          </h5>
        </a>
        <p className="opacity-80 mb-2 text-black">{text}</p>
        <div className="flex flexCenter mb-2">
          <a
            href="#!"
            className="text-red-500 bg-transparent hover:bg-green-600 border border-green-600 hover:text-white py-2 rounded transition ezy__blog15-card-btn flex items-center px-3"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};
BlogItem.propTypes = {
  blog: PropTypes.object.isRequired,
};

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleControl = (type) => {
    if (type === "prev") {
      setActiveIndex(activeIndex <= 0 ? blogs.length - 1 : activeIndex - 1);
    } else {
      setActiveIndex(activeIndex >= blogs.length - 1 ? 0 : activeIndex + 1);
    }
  };

  return (
    <section className=" py-14 md:py-24 lg:py-0 text-stone-800 bg-white bg-[#F5F5F5] dark:text-white overflow-hidden">
      <div className="container px-8 md:px-24">
        <div className="grid grid-cols-1 justify-center text-center">
          <div className="col-span-1">
            <h1 className="text-2xl md:text-[45px] leading-none font-bold text-black">
              Services
            </h1>
          </div>

          <div className="relative">
            <div className="grid grid-cols-6 gap-x-6">
              {blogs[activeIndex].map((blog, i) => (
                <div
                  className="col-span-6 md:col-span-3 lg:col-span-2 mt-6 md:mt-12"
                  key={i}
                >
                  <BlogItem blog={blog} />
                </div>
              ))}
            </div>

            <button
              className="w-12 h-12 text-[22px] bg-green-600 bg-opacity-70 hover:bg-opacity-100 text-white rounded-full absolute top-2/4 -left-6 -translate-y-1/2 transition"
              onClick={() => handleControl("prev")}
            >
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <button
              className="w-12 h-12 text-[22px] bg-green-600 bg-opacity-70 hover:bg-opacity-100 text-white rounded-full absolute top-2/4 -right-6 -translate-y-1/2 transition"
              onClick={() => handleControl("next")}
            >
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
