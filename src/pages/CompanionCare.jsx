import AboutService from "../components/AboutService";

const stories = [
  {
    text: "Offering personalized companionship and emotional support to alleviate loneliness and foster genuine connections.",
  },
  {
    text: "Providing flexible scheduling options to accommodate diverse needs and preferences, from brief visits to round-the-clock care.",
  },
  {
    text: "Granting respite for family caregivers, ensuring they have the opportunity to recharge and prioritize their well-being.",
  },
  {
    text: "Engaging seniors in stimulating activities, promoting mental stimulation and overall enjoyment.",
  },
  {
    text: "Assisting with daily tasks such as meal preparation, housekeeping, and errands to enhance comfort and convenience.",
  },
  {
    text: "Offering continuity of care and emotional support during transitional periods like hospital discharge or relocation.",
  },
];

function CompanionCare() {
  return (
    <div>
      <AboutService
        imageUrl= "https://plus.unsplash.com/premium_photo-1663134311269-f396920c5082?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTl8N19DU05YRVowLW98fGVufDB8fHx8fA%3D%3D"
        heading="Companion Care"
        paragraph="As individuals age, the specter of loneliness often becomes more pronounced. Memories of lost loved ones can intensify feelings of solitude and isolation. At Healing Soul, we recognize the profound impact of loneliness on seniors' well-being. Our Companion Care services are meticulously designed to provide comprehensive support and companionship, tailored to meet the unique needs of each individual."
        stories={stories}
      />
    </div>
  );
}

export default CompanionCare;
