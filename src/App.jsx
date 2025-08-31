import './App.css'
import LoginStatus from './component/LoginStatus'
import TaskItem from './component/Taskitem';
import TaskList from './component/TaskList';
import TaskManager from './component/TaskManager';

function App() {
  const sampleTask = { id: 1, text: "learn react", completed: false }; 

  return (
    <TaskItem task={sampleTask}/>
  )
}

export default App
