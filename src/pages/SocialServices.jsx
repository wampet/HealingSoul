import AboutService from "../components/AboutService";
import BottomCAT from "../components/BottomCAT";

const socialServicesStories = [
  {
    text: "Providing compassionate support and assistance to enhance social well-being and overall quality of life."
  },
  {
    text: "Maintaining a commitment to excellence in social services, setting the standard for compassionate and person-centered care."
  },
  {
    text: "Partnering with residents and their families to create meaningful social activities and connections, fostering a sense of community and belonging."
  },
  {
    text: "Innovating to meet the evolving needs of residents, offering creative solutions and engaging programs for enhanced social engagement."
  },
  {
    text: "Ensuring a welcoming and inclusive environment where residents feel valued, respected, and supported in their social interactions."
  },
];

function SocialServices() {
  return (
    <div>
      <AboutService
        imageUrl="https://careoptionsforkids.com/hubfs/Imported_Blog_Media/Difference-Between-Skilled-Nursing-Facilities-and-Nursing-Homes-1.jpg"
        heading="Social Services"
        paragraph="At Healing Home, we recognize the importance of social well-being in promoting overall quality of life for our residents. Our social services encompass a range of programs and support initiatives aimed at fostering meaningful connections, engagement, and fulfillment. From creative activities to community events, we strive to create an environment where residents feel valued, respected, and supported in their social interactions. Partnering closely with residents and their families, we tailor our services to meet individual needs and preferences, ensuring a warm and welcoming atmosphere where everyone feels at home."
        stories={socialServicesStories}
      />

      <BottomCAT/>
    </div>
  );
}

export default SocialServices;
