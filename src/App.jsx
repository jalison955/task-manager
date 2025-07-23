import { useState } from "react";
import Header from './components/Header';
import Input from './components/Input';
import Button from './components/Button';

const App = () => {
  const tasksInit = [
      { id: 1, title: 'Estudar React', completed: false },
      { id: 2, title: 'Fazer exercícios', completed: true },
      { id: 3, title: 'Ler um livro', completed: false }
  ];
  const [tasks, setTasks] = useState(tasksInit);
  const [count, setCount] = useState(tasksInit.length + 1);
  const [newTask, setNewTask] = useState('');

  const handleClick = () => {
      setTasks([
          ...tasks,
          { id: count, title: newTask, completed: false }
      ]);
      setCount(count + 1);
      setNewTask('');
  };

  return (
      <div>
          <Header>Adicionar Tarefas</Header>
          <Input onChange={e => setNewTask(e.target.value)} value={newTask}/>
          <Button handleClick={handleClick}/>
          <Header>Minhas Tarefas</Header>
          {tasks.map(task => (
              <div key={task.id} className="task">
                  <h2>{task.title}</h2>
                  <p>Status: {task.completed ? 'Concluída' : 'Pendente'}</p>
              </div>
          ))}
      </div>
  );
}

export default App
