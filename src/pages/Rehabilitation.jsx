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
        imageUrl="https://plus.unsplash.com/premium_photo-1661292052654-32d8875632c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8N19DU05YRVowLW98fGVufDB8fHx8fA%3D%3D"

        heading="Rehabilitation"
        paragraph="At Healing Home, we recognize the pivotal role of comprehensive rehabilitation services in restoring health and well-being. Our dedicated team of professionals designs personalized rehabilitation plans tailored to each individual's unique needs, ensuring optimal recovery and long-term success. Through innovative techniques and compassionate care, we empower our patients to regain independence and improve their quality of life. With a commitment to excellence and a focus on patient-centered care, we strive to make a positive difference in the lives of those we serve."
        stories={stories}
      />
    </div>
  );
}

export default Rehabilitation;
