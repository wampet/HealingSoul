/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
// import { useEffect } from "react";
// import "keen-slider/keen-slider.min.css";
// import KeenSlider from "keen-slider";
// import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Zigzag } from "../components/Zigzag";
import TestimonialItem from "../components/TestimonialsItem";
import TestimonialImage01 from "../assets/images/testimonial-01.jpg";
import TestimonialImage02 from "../assets/images/testimonial-02.jpg";
import TestimonialImage03 from "../assets/images/testimonial-03.jpg";
import TestimonialImage04 from "../assets/images/testimonial-04.jpg";
import Banner from "../components/Banner";
function WhyUs() {
  return (
    <div>
      <Banner
        title="Why Healing Soul?"
        subtitle="We are the best"
        backgroundImage="https://cdn2.hubspot.net/hubfs/747395/How%20to%20Find%20the%20Right%20Assisted%20Senior%20Living%20in%20Greenville%20SC.jpg"
      />
  
      <Zigzag />
      <Testimonials />
    </div>
  );
}

export default WhyUs;

const testimonialsData = [
  {
    imageSrc: TestimonialImage01,
    alt: "Testimonial 01",
    quote:
      "I'm extremely satisfied with the care and support provided by Healing Soul. The staff members are highly professional and compassionate. My experience here has been nothing short of excellent.",
    author: "John Smith",
    organization: "Happy Living Senior Care",
  },
  {
    imageSrc: TestimonialImage02,
    alt: "Testimonial 02",
    quote:
      "I want to express my gratitude to Healing Soul for the exceptional care my mother received during her stay. Your team went above and beyond to ensure her comfort and well-being.",
    author: "Emily Johnson",
    organization: "Loving Hands Assisted Living",
  },
  {
    imageSrc: TestimonialImage03,
    alt: "Testimonial 03",
    quote:
      "My family and I are thankful for the wonderful care provided by Healing Soul. The staff members are attentive, caring, and treat residents with respect and dignity.",
    author: "Michael Brown",
    organization: "Forever Young Nursing Home",
  },
  {
    imageSrc: TestimonialImage04,
    alt: "Testimonial 04",
    quote:
      "I couldn't be happier with the care my grandfather received at Healing Soul Home. The facilities are clean and well-maintained, and the staff members are truly dedicated to their work.",
    author: "Sarah Davis",
    organization: "Golden Years Senior Living",
  },
];

function Testimonials() {
  return (
    <section>
      <div className="max-w-screen-2xl  px-12 ">
        <div className="py-12 md:py-20 border-t border-transparent dark:border-gray-300">
          <div className="max-w-sm mx-auto grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:gap-12 items-start sm:max-w-none md:max-w-2xl lg:max-w-none">
            {testimonialsData.map((testimonial, index) => (
              <TestimonialItem
                key={index}
                imageSrc={testimonial.imageSrc}
                alt={testimonial.alt}
                quote={testimonial.quote}
                author={testimonial.author}
            
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Extracted Slide component
// const Slide = ({ title, content, author }) => (
//   <div className="keen-slider__slide">
//     <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
//       <div>
//         <Star className="h-5 w-5 text-green-500" />
//         <p className="text-2xl font-bold text-rose-600 sm:text-3xl">{title}</p>
//         <p className="mt-4 leading-relaxed text-gray-700">{content}</p>
//       </div>
//       <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
//         &mdash; {author}
//       </footer>
//     </blockquote>
//   </div>
// );

// const MyComponent = () => {
//   const slidesData = [
//     {
//       title: "Stayin' Alive",
//       content:
//         "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
//       author: "Michael Scott",
//     },
//     {
//       title: "Stayin' Alive",
//       content:
//         "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
//       author: "Michael Scott",
//     },
//     {
//       title: "Stayin' Alive",
//       content:
//         "No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?",
//       author: "Michael Scott",
//     },
//   ];

//   useEffect(() => {
//     const keenSlider = new KeenSlider("#keen-slider", {
//       loop: true,
//       slides: {
//         origin: "center",
//         perView: 1.25,
//         spacing: 16,
//       },
//       breakpoints: {
//         "(min-width: 1024px)": {
//           slides: {
//             origin: "auto",
//             perView: 1.5,
//             spacing: 32,
//           },
//         },
//       },
//     });

//     const keenSliderPrevious = document.getElementById("keen-slider-previous");
//     const keenSliderNext = document.getElementById("keen-slider-next");

//     keenSliderPrevious.addEventListener("click", () => keenSlider.prev());
//     keenSliderNext.addEventListener("click", () => keenSlider.next());

//     return () => {
//       keenSlider.destroy();
//     };
//   }, []);

//   return (
//     <section className="bg-[#F9FAFB]">
//       <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
//         <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
//           <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
//             <h2 className="text-3xl font-bold tracking-tight text-gray-heading sm:text-4xl">
//               Don't just take our word for it...
//             </h2>
//             <p className="mt-4 text-gray-heading">
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
//               veritatis illo placeat harum porro optio fugit a culpa sunt id!
//             </p>
//             {/* Previous and Next buttons */}
//             <div className="hidden lg:mt-8 lg:flex lg:gap-4">
//               <button
//                 aria-label="Previous slide"
//                 id="keen-slider-previous-desktop"
//                 className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
//               >
//                 <ChevronLeft />
//               </button>
//               <button
//                 aria-label="Next slide"
//                 id="keen-slider-next-desktop"
//                 className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
//               >
//                 <ChevronRight />
//               </button>
//             </div>
//           </div>

//           {/* KeenSlider container */}
//           <div className="-mx-6 lg:col-span-2 lg:mx-0">
//             <div id="keen-slider" className="keen-slider">
//               {/* Mapping over the slidesData to render Slide component */}
//               {slidesData.map((slide, index) => (
//                 <Slide key={index} {...slide} />
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Previous and Next buttons for small screens */}
//         <div className="mt-8 flex justify-center gap-4 lg:hidden">
//           <button
//             aria-label="Previous slide"
//             id="keen-slider-previous"
//             className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
//           >
//             <ChevronLeft />
//           </button>
//           <button
//             aria-label="Next slide"
//             id="keen-slider-next"
//             className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
//           >
//             <ChevronRight />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };
