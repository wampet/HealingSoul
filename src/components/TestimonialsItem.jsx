

// eslint-disable-next-line react/prop-types
const TestimonialItem = ({ imageSrc, alt, quote, author, organization }) => (
  <div className="text-center">
    <div className="relative inline-flex flex-col mb-4">
      <img className="rounded-full" src={imageSrc} width="56" height="56" alt={alt} />
      <svg className="absolute top-0 right-0 mt-1 -mr-8" width="27" height="12" xmlns="http://www.w3.org/2000/svg">
        <path className="fill-current text-orange-500" d="M2.785 5.334C2.538 5.5-.2 2.944.011 2.646.826 1.483 2.183.836 3.62.5 5.064.158 6.582.117 7.92-.02c.017-.002.098.153.088.166-1.763 2.018-3.223 3.836-5.221 5.188zm3.676 6.519c-.862.184-1.937-3.403-1.07-3.711 3.422-1.22 7.078-1.671 10.728-1.766 3.655-.096 7.304.162 10.866.32.044.002.06.177.018.187-6.938 1.634-13.691 3.504-20.542 4.97z" />
      </svg>
    </div>
    <blockquote className="text-xl text-gray-400">{quote}</blockquote>
    <div className="font-red-hat-display font-bold mt-2">
      <cite className="not-italic">—{author}</cite>, <a className="text-green-500 transition duration-150 ease-in-out" href="#0">{organization}</a>
    </div>
  </div>
);

export default TestimonialItem;
