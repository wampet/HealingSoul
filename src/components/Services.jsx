import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import PropTypes from "prop-types";

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  700: { items: 2 },
  1024: { items: 3 },
};
const blogs = [
  {
    img: "https://plus.unsplash.com/premium_photo-1661422278122-f75d0c7b655b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXw3X0NTTlhFWjAtb3x8ZW58MHx8fHx8",
    title: "Skilled Nursing",
    text: "We provide top-tier nursing care, tailored to each resident's needs. Explore our commitment to health and comfort.",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1664476958156-367e84136f26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXw3X0NTTlhFWjAtb3x8ZW58MHx8fHx8",
    title: "Social Services",
    text: "We connect residents with vital social services, fostering a supportive and vibrant community. Learn more about our offerings.",
  },

  {
    img: "https://plus.unsplash.com/premium_photo-1661292052654-32d8875632c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8N19DU05YRVowLW98fGVufDB8fHx8fA%3D%3D",
    title: "Rehabilitation",
    text: "Our customized rehab programs focus on enhancing independence. Discover our approach to physical and occupational therapy.",
  },

  {
    img: "https://plus.unsplash.com/premium_photo-1663134311269-f396920c5082?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8N19DU05YRVowLW98fGVufDB8fHx8fA%3D%3D",
    title: "Companion Care",
    text: "Experience our compassionate companion care, enriching daily life with warmth and understanding for each resident.",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1664476958156-367e84136f26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXw3X0NTTlhFWjAtb3x8ZW58MHx8fHx8",
    title: "Social Services",
    text: "We connect residents with vital social services, fostering a supportive and vibrant community. Learn more about our offerings.",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1663089104521-fdc5ab858c41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8N19DU05YRVowLW98fGVufDB8fHx8fA%3D%3D",
    title: "Specialized Care",
    text: "We provide more than just care – it's personalized, specialized attention, ensuring each resident's unique needs are met. Click to explore how our services go beyond, tailoring care to individual requirements.",
  },
];

const BlogItem = ({ blog }) => {
  const { title, text, img } = blog;
  return (
    <div className=" rounded-lg overflow-hidden h-full bg-white ">
      <div className="mb-4 overflow-hidden rounded-t-[5px] h-full">
        <img
          src={img}
          className="w-full transition hover:rotate-4 hover:scale-125"
          alt="..."
        />
      </div>
      <div className="flex flex-col items-center justify-center p-4">
        <a href="#!">
          <h5 className="text-gray-heading center text-xl font-medium leading-6 hover:text-green-600 mb-2">
            {title}
          </h5>
        </a>
        <p className=" mb-4 text-gray-heading text-center">{text}</p>
        <div className="flex ">
          <a
            href="#!"
            className="text-green-500 bg-transparent hover:bg-green-600 border border-green-600 hover:text-white py-2 rounded transition ezy__blog15-card-btn flex items-center px-3"
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

const Carousel = () => (
  <AliceCarousel
    mouseTracking
    autoPlay="true"
    autoPlayInterval="800"
    items={blogs.map((blog, i) => (
      <div key={i}>
        <div className="p-2">
          <BlogItem blog={blog} />
        </div>
      </div>
    ))}
    responsive={responsive}
    controlsStrategy="responsive"
  />
);

const Services = () => {
  return (
    <section className="bg-[#F5F5F5]  ">
      <div className="mx-auto max-w-screen-xl ">
        <div className="flex justify-center  ">
          <h1 className="text-3xl leading-none font-bold tracking-wider mb-2 text-gray-heading p-8">
            Services
          </h1>
        </div>
        <div>
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default Services;
