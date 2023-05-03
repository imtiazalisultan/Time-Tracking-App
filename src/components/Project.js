import React, { useState } from 'react';

const Projects = () => {
  const [projectName, setProjectName] = useState('');
  const [projectsList, setProjectsList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setProjectsList([...projectsList, projectName]);
    setProjectName('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter project name" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
        <button type="submit">Add Project</button>
      </form>
      <ul>
        {projectsList.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </div>
  );
};

export default Projects