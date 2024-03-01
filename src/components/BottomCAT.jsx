import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

function BottomCAT() {
    const navigate = useNavigate();

  return (
   <div className=" bg-[#16A34A] ">
     <div className=" mx-auto max-w-screen-xl text-white gap-4 flex flex-col sm:flex-row justify-between items-center p-8 ">
      <div className="">
        <h2 className="text-lg sm:text-2xl font-semibold">
          Looking for Exceptional Nursing Care? We have it.
        </h2>
      </div>
      <Button
        onClick={() => navigate("/contact")}
        variant="orange"
        size="xlg"
        className="md:w-1/4 "
      >
        Contact Us
      </Button>
    </div>
   </div>
  );
}

export default BottomCAT;

