import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const parseDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return new Date(year, month - 1, day); // date object without timezone issues
}

export default function DateSelector({ onDateChange, selectedDate }) {
    // construct the date from selectedDate
    const [startDate, setStartDate] = useState(parseDate(selectedDate));

    const handleDateChange = (date) => { 
        const formattedDate = date.toISOString().split('T')[0]; //'YYYY-MM-DD' for API use
        setStartDate(date);
        onDateChange(formattedDate);
    }

    useEffect(() => {
        setStartDate(parseDate(selectedDate)); // change start date if selectedDate changes
    }, [selectedDate]);

    return (
        <div> 
            <DatePicker 
                selected={startDate}
                onChange={handleDateChange}
                dateFormat="MMMM d, yyyy"
                className="p-2 rounded bg-gray-700 text-white text-center"
            />
        </div>
    )
}