
import './App.css';
import React, {useState} from 'react';

import DailyTotal from './components/DailyTotal';
import Projects  from './components/Project';
import Tasks from './components/Task';


export const TasksContext = React.createContext();

function App() {
  const [tasksList, setTasksList] = useState([]);
  return (
    <div className="App">
      <TasksContext.Provider value={{ tasksList, setTasksList }}>
        <Projects />
        <Tasks />
        <DailyTotal />
      </TasksContext.Provider>
    </div>
  );
}

export default App;
