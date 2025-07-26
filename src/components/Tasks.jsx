import { useState } from 'react';
import Header from './Header';
import Input from './Input';
import Button from './Button';

const Tasks = () => {
  const tasksInit = [
    { id: 1, title: 'Estudar React', completed: false },
    { id: 2, title: 'Fazer exercícios', completed: true },
    { id: 3, title: 'Ler um livro', completed: false },
  ];
  const [tasks] = useState(tasksInit);

  return (
    <div className="flex flex-1 flex-col gap-3 px-9 py-16">
      <Header />
      <div>
        {tasks.map((task) => (
          <div key={task.id} className="task">
            <h2>{task.title}</h2>
            <p>Status: {task.completed ? 'Concluída' : 'Pendente'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Tasks;
