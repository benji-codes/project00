import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import TaskList from './pages/TaskList';
import TaskDetails from './pages/TaskDetails';

function App() {
const sampleTasks = [
    { id: 1, text: "Learn ReactJS", completed: false },
    { id: 2, text: "Build a ToDo App", completed: true },
    { id: 2, text: "Build an e-Commerce App", completed: false },
    { id: 3, text: "Learn NextJS", completed: false },
  ];

return (
  <>
    <h1>Task Manager App</h1>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tasks" element={<TaskList tasks={sampleTasks} />} />
      <Route path="/tasks/:id" element={<TaskDetails tasks={sampleTasks} />} />

      <Route path="*" element={<h2>404 - Page Not Found</h2>} />
    </Routes>
  </>
);
}
export default App