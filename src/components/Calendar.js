// src/components/Calendar.js
import React from 'react';

function Calendar({ schedule }) {
    // Simple calendar rendering logic
    return (
        <div className="calendar">
            {schedule.map((day, index) => (
                <div key={index}>{day.day}</div>
            ))}
        </div>
    );
}

export default Calendar;
