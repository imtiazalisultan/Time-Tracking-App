import React, { useContext } from 'react';
import { TasksContext } from '../App';

const DailyTotal = () => {
  const { tasksList } = useContext(TasksContext);

  const totalHours = tasksList.reduce((total, task) => {
    return total + parseFloat(task.timeSpent);
  }, 0);

  return (
    <div>
      <h2>Daily Total: {totalHours} hours</h2>
    </div>
  );
};

export default DailyTotal;