/* eslint-disable react/prop-types */
function AboutUsView() {
  return (
    <div>
      <AboutUs />
    </div>
  );
}

export default AboutUsView;

const stories = [
  {
    title: "Vision",
    description:
      "Finding a hammock you can truly relax in didn’t happen overnight. It started with a chance discovery while on vacation, and took a lot of hard work (and a lot of hanging around) to bring the softest, most comfortable, and thoughtfully crafted hammocks to your backyard.",
    image: "https://careoptionsforkids.com/hubfs/Imported_Blog_Media/Difference-Between-Skilled-Nursing-Facilities-and-Nursing-Homes-1.jpg",
  },
  {
    title: "Mission",
    description:
      "More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously outside crud mightily rigorous negative one inside gorilla and drew humbly shot tortoise inside opaquely. Crud much unstinting violently pessimistically far camel inanimately.",
    image: "https://www.buckinghamhouston.com/wp-content/uploads/70286f33-4.3-sn-header-180521_buckingham_150_retouch_1200.jpg",
  },
  {
    title: "Values",
    description:
      "More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously outside crud mightily rigorous negative one inside gorilla and drew humbly shot tortoise inside opaquely. Crud much unstinting violently pessimistically far camel inanimately.",
    image: "https://www.usnews.com/dims4/USNEWS/c97ab66/2147483647/thumbnail/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2Ff1%2F18%2Ff07347ab4db390e3e20aac641836%2Fhttps-media-gettyimages-com-id-489582779-photo-happy-caretaker-assisting-senior-woman.jpg",
  },
];

const StoryItem = ({ item, index }) => {
  const { title, description, image } = item;
  return (
    <>
      <div
        className={`col-span-12 md:col-span-5 ${
          index % 2 === 0
            ? "order-1 md:order-2 md:col-start-7"
            : "order-2 md:order-1 md:col-start-2"
        }`}
      >
        <div
          className={`flex flex-col justify-center ${
            index % 2 === 0 ? "lg:pl-14" : "lg:pr-14"
          }`}
        >
          <h4 className="text-2xl font-bold mb-4">{title}</h4>
          <p className="text-base leading-relaxed text-justify opacity-70 mb-0 md:pr-6">
            {description}
          </p>
        </div>
      </div>
      <div
        className={`${
          index % 2 === 0
            ? "order-1 md:col-start-2"
            : "order-1 md:order-2 md:col-start-7"
        } col-span-12 md:col-span-5  mb-6 md:mb-0 mt-6 md:mt-0`}
      >
        <div>
          <img
            src={image}
            alt={title}
            className="max-w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </>
  );
};

const AboutUs = () => {
  return (
    <section className="light py-14 md:py-24  text-gray-heading ">
      <div className="container px-4">
        <div className="grid grid-cols-12 justify-center text-center mb-12">
          <div className="col-span-12 md:col-span-8 md:col-start-3">
            <h2 className="text-4xl leading-snug md:text-5xl md:leading-snug font-bold mb-6">
              Our Story
            </h2>
            <p className="text-xl opacity-80 mb-4">
              We are reshaping what senior living should be-communities where
              each resident is a citizen who has influence, autonomy, and a
              vital role in its overall well-being. With a vision of creating
              communities where aging is honored and celebrated, we are
              committed to breaking the barriers built by ageism and empowering
              older adults to live with purpose.
            </p>
          </div>
        </div>

        {stories.map((item, i) => (
          <div
            className="grid grid-cols-12 justify-center items-center mt-12"
            key={i}
          >
            <StoryItem item={item} index={i + 1} />
          </div>
        ))}
      </div>
    </section>
  );
};

// eslint-disable-next-line no-unused-vars
function Additionally() {
  return (
    <div>
      <div>
        <div className="relative max-w-screen-xl p-4 px-4 mx-auto bg-white dark:bg-gray-800 sm:px-6 lg:px-8 py-26 lg:mt-20">
          <div className="relative">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
                <p className="text-base font-semibold leading-6 text-indigo-500 uppercase">
                  Interactive
                </p>
                <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                  Interactivity between team members is the key of the success.
                </h4>
                <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                  Build a simply and powered collaborative space for all your
                  team. Track, share, measure, you have a fully control,
                  it&#x27;s never be simply and efficient.
                </p>
                <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
                  <li className="mt-6 lg:mt-0">
                    <div className="flex">
                      <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                        Live modifications
                      </span>
                    </div>
                  </li>
                  <li className="mt-6 lg:mt-0">
                    <div className="flex">
                      <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                        Data tracker
                      </span>
                    </div>
                  </li>
                  <li className="mt-6 lg:mt-0">
                    <div className="flex">
                      <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                        24/24 support
                      </span>
                    </div>
                  </li>
                  <li className="mt-6 lg:mt-0">
                    <div className="flex">
                      <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                        <svg
                          className="w-4 h-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                        Free tips to improve work time
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
                <div className="relative space-y-4">
                  <div className="flex items-end justify-center space-x-4 lg:justify-start">
                    <img
                      className="w-32 rounded-lg shadow-lg md:w-56"
                      width="200"
                      src="https://images.pexels.com/photos/3768136/pexels-photo-3768136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="1"
                    />
                    <img
                      className="w-40 rounded-lg shadow-lg md:w-64"
                      width="260"
                      src="https://s3.amazonaws.com/utep-uploads/wp-content/uploads/online-regis-college/2019/09/24100636/skilled-nursing-facility.jpg"
                      alt="2"
                    />
                  </div>
                  <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                    <img
                      className="w-24 rounded-lg shadow-lg md:w-40"
                      width="170"
                      src="https://media.zenfs.com/en/smartasset_475/b8bae31f26e477ad59d53cafc1f5e80f"
                      alt="3"
                    />
                    <img
                      className="w-32 rounded-lg shadow-lg md:w-56"
                      width="200"
                      src="https://www.careuk.com/getmedia/716b3089-f585-4ebd-b1e7-c89ab9e009b9/Resident-and-Carer-cup-of-tea.jpg"
                      alt="4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
