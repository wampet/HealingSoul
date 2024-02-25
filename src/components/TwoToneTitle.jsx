/* eslint-disable react/prop-types */
const TwoColorHeading = ({ firstWord, secondWord }) => {
  return (
    <h2 className="text-3xl font-extrabold sm:text-4xl font-sans">
      <span className="text-[#004225]">{firstWord}</span>
      <span> </span>
      <span className="text-[#EA6C20]">{secondWord}</span>
    </h2>
  );
};

export default TwoColorHeading;
