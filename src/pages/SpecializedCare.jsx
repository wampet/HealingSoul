import AboutService from "../components/AboutService";
import BottomCAT from "../components/BottomCAT";

const specializedCareStories = [
  {
    text: "Providing specialized care tailored to meet the unique needs of each individual, ensuring personalized attention and support.",
  },
  {
    text: "Maintaining a commitment to excellence in healthcare, setting the standard for quality and compassionate care in specialized services.",
  },
  {
    text: "Partnering with patients and their families to develop comprehensive care plans, fostering collaboration and empowerment.",
  },
  {
    text: "Innovating to meet the evolving needs of patients, offering cutting-edge solutions and advanced therapies for enhanced care outcomes.",
  },
  {
    text: "Ensuring a holistic approach to care that addresses not only physical health but also emotional, social, and spiritual well-being.",
  },
];

function SpecializedCare() {
  return (
    <div>
      <AboutService
        imageUrl="https://plus.unsplash.com/premium_photo-1663089104521-fdc5ab858c41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8N19DU05YRVowLW98fGVufDB8fHx8fA%3D%3D"
        heading="Specialized Care"
        paragraph="At Healing Home, we are committed to providing specialized care tailored to meet the unique needs of each individual. From complex medical conditions to specialized therapies, our team of professionals delivers compassionate and expert care, setting the standard for excellence in specialized services. We collaborate closely with patients and their families to develop comprehensive care plans that address all aspects of well-being. Through innovation and advanced therapies, we strive to enhance care outcomes and improve quality of life. With a holistic approach to care, we aim to make a meaningful difference in the lives of those we serve."
        stories={specializedCareStories}
      />
      <BottomCAT />
    </div>
  );
}

export default SpecializedCare;
