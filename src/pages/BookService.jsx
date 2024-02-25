function BookService() {
  return (
    <div>
      <form className="max-w-4xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            className="border-2 p-2 w-full"
            type="text"
            placeholder="First Name*"
          />
          <input
            className="border-2 p-2 w-full"
            type="text"
            placeholder="Last Name*"
          />
          <input
            className="border-2 p-2 w-full"
            type="text"
            placeholder="Address*"
          />
          <input
            className="border-2 p-2 w-full"
            type="text"
            placeholder="City, State, Zip Code*"
          />
          <input
            className="border-2 p-2 w-full"
            type="email"
            placeholder="Email*"
          />
          <input
            className="border-2 p-2 w-full"
            type="tel"
            placeholder="Phone Number*"
          />
          <div className="md:col-span-2">
            <select className="border-2 p-2 w-full">
              <option>Who Are You Seeking Care For?*</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <select className="border-2 p-2 w-full">
              <option>Which Care Services Are Required?*</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <select className="border-2 p-2 w-full">
              <option>How many hours of care per week will you need?*</option>
            </select>
          </div>
          <input
            className="border-2 p-2 w-full md:col-span-2"
            type="text"
            placeholder="dd/mm/yyyy"
          />
          <textarea
            className="border-2 p-2 w-full md:col-span-2"
            placeholder="Message*"
          ></textarea>
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-green-500 text-white px-6 py-2 rounded">
            Submit Now
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookService;
