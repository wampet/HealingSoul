/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import ListItem from "./ListItem";

const reasonsToChooseUs = [
  {
    right: false,
    imageSrc:
      "https://online.maryville.edu/wp-content/uploads/sites/97/2019/12/nursing-home-care-1.jpg", // Replace "#" with your actual image URL
    title: "Comprehensive Care",
    description:
      "We offer a holistic approach to care, ensuring all aspects of our residents' health and well-being are addressed. Our team works around the clock to provide personalized care plans tailored to individual needs.",
    punchLines: [
      "Personalized Care Plans",
      "24/7 Professional Support",
      "Holistic Health Focus",
    ],
  },
  {
    right: true,
    imageSrc:
      "https://www.nursinghomeabusecenter.com/wp-content/uploads/2019/11/happy-seniors-nursing-home.png", // Replace "#" with your actual image URL
    title: "Home-Like Environment",
    description:
      "Our facilities are designed to feel like home, offering comfort and ease with personalizable spaces and common areas that encourage community and connection.",
    punchLines: [
      "Comforts of Home",
      "Personal & Communal Spaces",
      "Warm & Welcoming Atmosphere",
    ],
  },
  {
    right: false,
    imageSrc:
      "https://cdn2.hubspot.net/hubfs/747395/How%20to%20Find%20the%20Right%20Assisted%20Senior%20Living%20in%20Greenville%20SC.jpg", // Replace "#" with your actual image URL
    title: "Engaging Activities",
    description:
      "Keeping our residents active and engaged with a wide range of activities and programs is a priority, promoting mental, physical, and social well-being.",
    punchLines: [
      "Diverse Recreational Programs",
      "Physical & Mental Wellness",
      "Social Engagement Opportunities",
    ],
  },
  {
    right: true,
    imageSrc: "https://img1.wsimg.com/isteam/stock/4641", // Replace "#" with your actual image URL
    title: "Nutrition & Dining",
    description:
      "Nutrition is crucial for our residents' health and happiness. Our culinary team prepares nutritious, delicious meals that cater to dietary restrictions and preferences.",
    punchLines: [
      "Chef-Prepared Nutritious Meals",
      "Catering to Dietary Needs",
      "Enjoyable Dining Experience",
    ],
  },
];

function Zigzag() {
  return (
    <section>
 
        <div >
          {reasonsToChooseUs.map((feature, index) => (
            <div className="md:py-5">
              <DetailFeature
              key={index}
              right={feature.right}
              imageSrc={feature.imageSrc}
              title={feature.title}
              description={feature.description}
              punchLines={feature.punchLines}
            />
            </div>
          ))}
 
      </div>
    </section>
  );
}

const DetailFeature = ({ right, imageSrc, title, description, punchLines }) => (
  <section className=" mx-auto max-w-screen-xl">
    <div
      className={`flex flex-col items-center md:items-start m-12 justify-center md:justify-start md:flex-row    md:my-10 ${
        right ? "md:flex-row-reverse" : "flex-col"
      }`}
    >
      <div className="p-4 w-4/5 overflow-hidden rounded-xl">
        <img
          className=" transition rounded-xl  shadow-lg  hover:rotate-2 hover:scale-125"
          src={imageSrc}
          alt="Feature Image"
        />
      </div>
      <div className="px-5 w-4/5">
        <div className="text-3xl leading-none font-bold uppercase tracking-wider text-green-600">
          {title}
        </div>
        <hr className="bg-green-600 h-1 rounded-[3px] w-12 opacity-100 my-4" />
        <div className="text-md lg:text-lg text-gray-1000 py-4">
          {description}
        </div>
        {punchLines &&
          punchLines.map((item, index) => (
            <ListItem key={index} title={item} />
          ))}
      </div>
    </div>
  </section>
);


export { DetailFeature, Zigzag };
