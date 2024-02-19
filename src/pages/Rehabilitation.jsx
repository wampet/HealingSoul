import AboutService from "../components/AboutService"

const stories = [
    {
      text: "Acknowledging that the employees of an organization create its success",
    },
    {
      text: "Maintaining no-compromise standard of excellence in healthcare and people care.",
    },
    {
      text: "Setting a standard of excellence in the delivery of quality and wholesome care",
    },
    {
      text: "Find more creative ideas for your projects",
    },
    {
      text: "Faucibus porta lacus fringilla vel",
    },
  ];


function Rehabilitation() {
    return (
        <div>
            <AboutService
        imageUrl="https://careoptionsforkids.com/hubfs/Imported_Blog_Media/Difference-Between-Skilled-Nursing-Facilities-and-Nursing-Homes-1.jpg"
        heading="Rehabilitation"
        paragraph="When you’re not feeling well, you want to know there’s a team that you can turn to. 
        With our full range of nursing services, including skilled and long-term care, we can help you manage whatever the future may bring. Partnering with your family, 
        we become an extension of them to ensure you receive what you need when you need it."
        stories={stories}
      />
     
        </div>
    )
}

export default Rehabilitation
