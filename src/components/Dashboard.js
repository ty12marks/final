import React from 'react';
import WorkoutDay from './workoutday';

// Example data
const weeklyWorkout = [
  { day: 'Monday', workouts: [{ name: 'Snatch', sets: '3x3', weight: '70% 1RM' }] },
  // Add other days similarly
];

function Dashboard() {
  return (
    <div className="dashboard">
      {weeklyWorkout.map((dayInfo, index) => (
        <WorkoutDay key={index} day={dayInfo.day} workouts={dayInfo.workouts} />
      ))}
    </div>
  );
}

export default Dashboard;
