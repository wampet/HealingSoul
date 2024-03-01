/* eslint-disable react/prop-types */


const Banner = ({ title, subtitle, backgroundImage }) => {
  return (
    <div
      className="relative w-full text-white py-20 flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="z-10 text-center">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="text-xl mt-4 text-green-50 hover:text-orange-500">{subtitle}</p>
      </div>
    </div>
  );
};

export default Banner;
