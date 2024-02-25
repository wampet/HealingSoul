
function CTA() {
  return (
    <div>
      <section className="text-gray-600 body-font py-14 md:py-24 bg-[#2F8344] ">
      <div className="container px-4">
        <div className="grid grid-cols-12 lg:grid-cols-7 place-items-center text-center text-white">
          <div className="col-span-12">
            <h2 className="text-2xl md:text-[45px] leading-none font-bold mb-6">
              Contact Us Today!
            </h2>

            <div className="grid grid-cols-12 place-items-center">
              <div className="col-span-12 sm:col-span-6 sm:col-start-4 sm:px-3 md:px-12 lg:px-24">
                <p className="text-lg leading-6 mb-12">
                  Call us to set a time when you can stop by to tour our
                  facility, enjoy a meal and meet our wonderful staff.
                </p>
                <form>
                  <div className="relative flex flex-wrap items-center justify-between p-2 bg-white rounded w-full">
                    <input
                      type="email"
                      className="min-h-12 leading-10 px-4 w-full"
                      placeholder="Enter Email"
                    />
                    <div className="absolute right-1">
                      <button className="bg-orange-500 hover:bg-opacity-90 text-white border border-orange-500 py-3 px-7 rounded transition font-normal">
                        Book an Appointment
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}

export default CTA;


