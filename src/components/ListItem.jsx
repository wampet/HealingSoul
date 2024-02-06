/* eslint-disable react/prop-types */
import { Check } from "lucide-react";

const ListItem = ({ title }) => (
  <div className="flex items-center lg:pb-1">
    <div className="w-4 mr-4">
      <Check className="text-green-400 h-5 w-5" />
    </div>
    <h1 className="text-sm text-gray-1000 lg:regular-16  ">{title}</h1>
  </div>
);

export default ListItem;
