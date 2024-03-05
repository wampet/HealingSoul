import { Mail, MapPin, PhoneIcon } from "lucide-react";

function TopBanner() {
  return (
    <div className="bg-[#16A34A] text-white font-serif font-semibold text-md py-3">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-between md:flex-row md:px-12">
        <div className="flex flex-col items-center md:flex-row md:items-center">
          <a
            href="tel:+16176061716"
            className="flex items-center hover:text-gray-200 mr-0 mb-2 md:mb-0 md:mr-4"
          >
            <PhoneIcon className="mr-1 h-5  w-5" />
            Tel: +1 (617) 606-1716
          </a>
          <span className="hidden md:block text-white mx-2">|</span>
          <a
            href="mailto:healingsoul77@yahoo.com"
            className="flex items-center hover:text-gray-200 ml-2"
          >
            <Mail className="mr-1 h-5  w-5" />
            healingsoul77@yahoo.com
          </a>
        </div>
        <div className="flex items-center mt-2 md:mt-0">
          <MapPin className="mr-1 h-5  w-5" />
          15 Middlesex st, Framingham, MA. 01702
        </div>
      </div>
    </div>
  );
}

export default TopBanner;
