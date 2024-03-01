function Statistics() {
  return (
    <div className="relative w-full">
      <img
        src="https://images.pexels.com/photos/7551623/pexels-photo-7551623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Background"
        className="w-full h-auto object-cover"
      />

      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-8 md:p-16">
        <div className="text-white max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            we care for our
            <br />
            community through
            <br />
            uncompromised
            <br />
            Dedication to client care.
          </h1>
          <p className="text-xl">
            We provide quality driven, patient centered, integrated care to all
            who entrust us to guide their healing process, health care needs,
            and individualized care in the comfort of their home or place of
            residence.
          </p>
        </div>

        <div className="flex justify-around items-center text-white max-w-4xl mx-auto mt-8">
          <div className="text-center">
            <span className="text-4xl font-bold">8</span>
            <p className="text-lg">Senior Services</p>
          </div>
          <div className="text-center">
            <span className="text-4xl font-bold">50</span>
            <p className="text-lg">Skilled Physician</p>
          </div>
          <div className="text-center">
            <span className="text-4xl font-bold">400</span>
            <p className="text-lg">Happy People</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
