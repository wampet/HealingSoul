/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import AboutService from "../components/AboutService";

// const serviceList = [
//   {
//     color: "red",
//     icon: faCannabis,
//     title: "Data Entry",
//     description:
//       "Given. Morning it darkness moved. Winged may, living moveth multiply earth day heaven land a dry divide multiply darkness midst.",
//   },
//   {
//     color: "blue",
//     icon: faRandom,
//     title: "Content Verifing",
//     description:
//       "Created, every, green deep abundantly set said our life second greater. Forth had first let night had. Brought creepeth that.",
//   },
//   {
//     color: "yellow",
//     icon: faCamera,
//     title: "Photo Editing",
//     description:
//       "Every upon which behold evening forth. Beast life days deep man. I you're likeness doesn't whose. Creature creepeth from subdue.",
//   },
//   {
//     color: "red",
//     icon: faCamera,
//     title: "Branding",
//     description:
//       "Image set multiply the had greater without face itself whales yielding image female fruit given light second bring seed in.",
//   },
//   {
//     color: "blue",
//     icon: faRandom,
//     title: "Content Marketing",
//     description:
//       "Given dominion spirit years evening together form rule meat two subdue after likeness greater from cattle yielding creature bring all.",
//   },
//   {
//     color: "yellow",
//     icon: faCannabis,
//     title: "API Intigration",
//     description:
//       "A, fowl after dominion under. Years be beast evening fruitful whose seasons second seas let morning together cattle fill you.",
//   },
// ];

// const ServiceItem = ({ service, isRightAlign }) => (
//   <div className={`flex mt-12 ${isRightAlign && "lg:text-end"}`}>
//     <div className="mr-4 lg:mr-0 lg:ml-4 lg:order-2">
//       <span
//         className={`bg-${service.color}-500 text-white w-16 h-16 rounded-full text-3xl inline-flex justify-center items-center mb-6`}
//       >
//         <FontAwesomeIcon icon={service.icon} />
//       </span>
//     </div>
//     <div>
//       <h4 className="text-2xl font-medium mb-4">{service.title}</h4>
//       <p className="opacity-80">{service.description}</p>
//     </div>
//   </div>
// );

const skilledNursingStories = [
  {
    text: "Delivering compassionate and expert care to ensure optimal health outcomes for every patient."
  },
  {
    text: "Maintaining a commitment to excellence in healthcare, setting a standard for quality and compassionate care."
  },
  {
    text: "Empowering patients through education and support, fostering independence and well-being."
  },
  {
    text: "Innovating to meet evolving healthcare needs, providing cutting-edge solutions for enhanced patient care."
  },
  {
    text: "Providing holistic care that addresses the physical, emotional, and spiritual needs of patients."
  },
];

const SkilledNursing = () => {
  return (
    <section>
      <AboutService
        imageUrl="https://careoptionsforkids.com/hubfs/Imported_Blog_Media/Difference-Between-Skilled-Nursing-Facilities-and-Nursing-Homes-1.jpg"
        heading="Skilled Nursing"
        paragraph="At Healing Home, we are dedicated to providing compassionate and expert care to ensure optimal health outcomes for every patient. Our skilled nursing services encompass a range of specialized care options designed to meet the unique needs of each individual. From post-surgical care to chronic disease management, we offer comprehensive support to promote healing and well-being. Partnering with patients and their families, we strive to empower individuals through education, support, and innovative healthcare solutions. With a commitment to excellence and a focus on holistic care, we aim to make a positive impact on the lives of those we serve."
        stories={skilledNursingStories}
      />
      {/* Additional components related to skilled nursing */}
    </section>
  );
};


export default SkilledNursing;

// function Skilled() {
//   return (
//     <section className=" light py-14 md:py-24 bg-white  text-zinc-900 ">
//       <div className="container px-4 mx-auto">
//         <div className="flex items-center justify-center mb-6 sm:mb-12">
//           <div className="w-full max-w-xl text-center">
//             <h2 className="text-3xl leading-none md:text-[45px] font-bold mb-4">
//               Services We Have
//             </h2>
//             <p className="text-lg opacity-80 mb-6">
//               Heaven third, in years fourth every male seed fish us saying
//               female his great doesn't. Bearing. Kind sixth moving, beast.
//             </p>
//           </div>
//         </div>
//         <div className="grid grid-cols-3 gap-6 lg:gap-12 pt-12">
//           <div className="col-span-3 lg:col-span-1 lg:order-2">
//             <div
//               className="bg-center bg-no-repeat bg-cover rounded-2xl h-full min-h-[200px]"
//               style={{
//                 backgroundImage:
//                   "url(https://cdn.easyfrontend.com/pictures/sign-in-up/sign3.jpg)",
//               }}
//             ></div>
//           </div>
//           <div className="col-span-3 lg:col-span-1 ezy__SkilledNursing-list">
//             <div className="lg:my-12">
//               {serviceList.slice(3, 6).map((service, i) => (
//                 <ServiceItem service={service} key={i} isRightAlign={true} />
//               ))}
//             </div>
//           </div>
//           <div className="col-span-3 lg:col-span-1 ezy__SkilledNursing-list lg:order-3">
//             <div className="lg:my-12">
//               {serviceList.slice(0, 3).map((service, i) => (
//                 <ServiceItem service={service} key={i} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
