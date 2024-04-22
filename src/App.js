import React, { useState, useEffect } from 'react';
import Header from './Header';  // Ensure the import path is correct
import ActivityForm from './ActivityForm';
import ActivityList from './ActivityList';

function App() {
  const [activities, setActivities] = useState(() => {
    const savedActivities = localStorage.getItem('activities');
    return savedActivities ? JSON.parse(savedActivities) : [];
  });

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(activities));
  }, [activities]);

  const addActivity = activity => {
    setActivities(prevActivities => [...prevActivities, activity]);
  };

  return (
    <div className="App">
      <Header />  {/* Now the Header component should render its content */}
      <div className="container mx-auto mt-4 px-4">
        <ActivityForm addActivity={addActivity} />
        <ActivityList activities={activities} />
      </div>
    </div>
  );
}

export default App;
