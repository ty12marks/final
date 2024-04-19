import React from 'react';

function ActivityList({ activities, deleteActivity }) {
  // Group activities by date
  const groupedActivities = activities.reduce((acc, activity) => {
    const { date } = activity;
    if (!acc[date]) acc[date] = [];
    acc[date].push(activity);
    return acc;
  }, {});

  return (
    <div>
      {Object.keys(groupedActivities).sort().map((date) => (
        <div key={date} className="bg-white rounded-lg shadow-md p-4 mb-5">
          <h3 className="font-bold text-lg text-gray-800">{date}</h3>
          <ul>
            {groupedActivities[date].map((activity, index) => (
              <li key={index} className="border-b last:border-b-0 py-2">
                {activity.activity} - {activity.duration} minutes
                <button
                  onClick={() => deleteActivity(index)}
                  className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ActivityList;


