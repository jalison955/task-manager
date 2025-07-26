import { useState } from 'react';
import TasksHeader from './TasksHeader';
import TasksList from './TasksList';

const Tasks = () => {
  const tasksInit = [
    { id: 1, title: 'Estudar React', period: 'manhã', completed: false },
    { id: 2, title: 'Estudar Nest', period: 'manhã', completed: false },
    { id: 3, title: 'Fazer aula de inglês', period: 'noite', completed: false },
    { id: 4, title: 'Estudar React', period: 'tarde', completed: false },
    { id: 5, title: 'Fazer exercícios', period: 'tarde', completed: true },
    { id: 6, title: 'Ler um livro', period: 'noite', completed: false },
  ];
  const [tasks] = useState(tasksInit);

  return (
    <div className="flex flex-1 flex-col gap-4 px-8 py-16">
      <TasksHeader />
      <TasksList tasks={tasks} />
    </div>
  );
};
export default Tasks;
