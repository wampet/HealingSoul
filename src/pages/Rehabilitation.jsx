import AboutService from "../components/AboutService";

const stories = [
  {
    text: "Providing personalized rehabilitation plans tailored to individual needs, ensuring optimal recovery and well-being.",
  },
  {
    text: "Maintaining a commitment to excellence in healthcare, delivering quality and wholesome care to every patient.",
  },
  {
    text: "Setting a standard of excellence in rehabilitation services, striving for optimal outcomes and patient satisfaction.",
  },
  {
    text: "Offering innovative rehabilitation techniques and therapies to enhance recovery and improve quality of life.",
  },
  {
    text: "Fostering a supportive and compassionate environment to empower patients on their journey to recovery.",
  },
];

function Rehabilitation() {
  return (
    <div>
      <AboutService
        imageUrl="https://careoptionsforkids.com/hubfs/Imported_Blog_Media/Difference-Between-Skilled-Nursing-Facilities-and-Nursing-Homes-1.jpg"
        heading="Rehabilitation"
        paragraph="At Healing Home, we recognize the pivotal role of comprehensive rehabilitation services in restoring health and well-being. Our dedicated team of professionals designs personalized rehabilitation plans tailored to each individual's unique needs, ensuring optimal recovery and long-term success. Through innovative techniques and compassionate care, we empower our patients to regain independence and improve their quality of life. With a commitment to excellence and a focus on patient-centered care, we strive to make a positive difference in the lives of those we serve."
        stories={stories}
      />
    </div>
  );
}

export default Rehabilitation;
