import React from 'react';
import WorkoutDetails from './workoutdetails';

function WorkoutDay({ day, workouts }) {
    return (
        <div className="bg-gray-100 p-4 m-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2">{day}</h2>
            {workouts.map((workout, index) => (
                <WorkoutDetails key={index} workout={workout} />
            ))}
        </div>
    );
}

export default WorkoutDay;
