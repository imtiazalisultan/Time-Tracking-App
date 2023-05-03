import React, { useState , useContext} from 'react';
import { TasksContext } from '../App';
const Tasks = () => {
    const { tasksList , setTasksList} = useContext(TasksContext);
    const [taskName, setTaskName] = useState('');
   // const [tasksList, setTasksList] = useState([]);
    const [timeSpent, setTimeSpent] = useState(0);
    const [description, setDescription] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setTasksList([...tasksList, { taskName, timeSpent, description }]);
      setTaskName('');
      setTimeSpent(0);
      setDescription('');
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter task name" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
          <input type="number" placeholder="Time spent (in hours)" value={timeSpent} onChange={(e) => setTimeSpent(e.target.value)} />
          <input type="text" placeholder="Description of task" value={description} onChange={(e) => setDescription(e.target.value)} />
          <button type="submit">Add Task</button>
        </form>
        <ul>
          {tasksList.map((task, index) => (
            <li key={index}>
              Task: {task.taskName}, Time Spent: {task.timeSpent} hours, Description: {task.description}
            </li>
          ))}
        </ul>
      </div>
    );
  };
export default Tasks  