
// const imgList = [
//   {
//     src: "https://cdn.easyfrontend.com/pictures/logos/white-cnn-logo.png",
//   },
//   {
//     src: "https://cdn.easyfrontend.com/pictures/logos/white-google-logo.png",
//   },
//   {
//     src: "https://cdn.easyfrontend.com/pictures/logos/white-amazon-logo.png",
//   },
//   {
//     src: "https://cdn.easyfrontend.com/pictures/logos/white-google-logo.png",
//   },
//   {
//     src: "https://cdn.easyfrontend.com/pictures/logos/white-fedex-logo.png",
//   },
// ];

function Hero() {
    return (
        <div
        className="ezy__header33 light bg-cover bg-right bg-no-repeat text-white relative flex justify-center items-center py-40 md:py-48 z-[1]"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg)",
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 bottom-0 -z-[1]"
          style={{
            background:
              "linear-gradient(130deg, rgba(13, 110, 253, 0.35), rgba(0, 0, 0, 0.631))",
          }}
        ></div>
        <div className="container px-4">
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-9 lg:col-span-7 xl:col-span-6">
              <h2 className="text-[32px] leading-snug md:text-8xl font-bold tracking-wider mb-6">
                Always Committed and Dedicated
              </h2>
              <p className="text-lg leading-relaxed mb-12 md:mr-32 lg:mr-52">
                An activity that requires a persons mental or physical effort is work.If a
                person is trained for a certain type of job, they may have a job or profession
                which suits.
              </p>
              <div className="md:mr-40 lg:mr-72">
                <button className="py-4 px-8 text-bold bg-white text-black font-bold hover:bg-opacity-80 rounded-full w-full">
                  Know More about us
                </button>
              </div>
            </div>
          </div>
          {/* <div className="absolute bottom-4 md:bottom-12 left-1/2 w-full -translate-x-1/2">
            <div className="flex flex-wrap gap-6 items-center justify-center mt-12">
              {imgList.map((item, i) => (
                <img
                  src={item.src}
                  alt=""
                  key={i}
                  className="max-h-6 mx-4 opacity-75 duration-500 lg:max-h-14 pr-12"
                />
              ))}
            </div>
          </div> */}
        </div>
      </div>
    )
}

export default Hero
