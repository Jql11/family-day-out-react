import React, { useState } from "react";
import DatePicker from "react-datepicker";


// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DateSelect = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker className="datepicker" selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};

export default DateSelect;