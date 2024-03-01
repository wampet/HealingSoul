import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

function CTA() {
  const navigate = useNavigate();
  return (
    <div>
      <section className="text-gray-600 body-font py-14 md:py-24 bg-[#2F8344] ">
        <div className=" px-4">
          <div className="text-center text-white">
            <h2 className="text-2xl md:text-[45px] leading-none font-bold mb-6">
              Contact Us Today!
            </h2>
            <div className="mx-auto max-w-lg">
              <p className="text-lg leading-6 mb-12">
                Call us to set a time when you can stop by to tour our facility,
                enjoy a meal and meet our wonderful staff.
              </p>
              <form>
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-x-4 md:space-y-0">
                  <Button
                  onClick={() => navigate("/about/company-overview")}
                    variant="outline"
                    size="xlg"
                    className="md:w-[60%] "
                  >
                    Learn More
                  </Button>
                  <div className="p-2"></div>
                  <Button
                  onClick={() => navigate("/contact")}
                    variant="orange"
                    size="xlg"
                    className="md:w-[60%] "
                  >
                    Contact Us
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CTA;
