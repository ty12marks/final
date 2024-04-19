import React, { useState } from 'react';

function ActivityForm({ addActivity }) {
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().substring(0, 10); // Set default date to today in YYYY-MM-DD format
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!activity || !duration || !date) return;
    addActivity({ activity, duration, date });
    setActivity('');
    setDuration('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Activity type"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      />
      <input
        type="text"
        placeholder="Duration (in minutes)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <button type="submit">Log Activity</button>
    </form>
  );
}

export default ActivityForm;
