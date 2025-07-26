import { useState } from 'react';
import TasksHeader from './TasksHeader';
import TasksList from './TasksList';

const Tasks = () => {
  const tasksInit = [
    {
      id: 1,
      title: 'Estudar React',
      description: 'Estudar states do React',
      period: 'manhã',
      status: 'waiting',
    },
    {
      id: 2,
      title: 'Estudar Nest',
      description: 'Estudar APIs no Nest',
      period: 'manhã',
      status: 'progress',
    },
    {
      id: 3,
      title: 'Fazer aula de inglês',
      description: 'Treinar conversação para entrevistas',
      period: 'tarde',
      status: 'done',
    },
    {
      id: 4,
      title: 'Estudar React',
      description: 'Estudar states do React',
      period: 'tarde',
      status: 'waiting',
    },
    {
      id: 5,
      title: 'Fazer exercícios',
      description: 'Fazer exercícios físicos para costas',
      period: 'noite',
      status: 'done',
    },
    {
      id: 6,
      title: 'Ler um livro',
      description: 'Ler o livro Clean Code',
      period: 'noite',
      status: 'progress',
    },
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
