import  { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MyDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="date-picker-container">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="dd/MM/yyyy"
        className="w-full rounded-md border border-input bg-transparent px-3 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 min-h-[80px] disabled:cursor-not-allowed disabled:opacity-50"
        placeholderText="dd/mm/yyyy"
      />
    </div>
  );
};

export default MyDatePicker;
