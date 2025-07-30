import { useEffect, useState } from 'react';
import { toast } from 'sonner';

import TasksHeader from './TasksHeader';
import TasksList from './TasksList';

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
const Tasks = () => {
  const [tasks, setTasks] = useState(tasksInit);
  const [taskId, setTaskId] = useState('');
  const [taskStatus, setTaskStatus] = useState('');

  const handleDeleteClick = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    toast.success('Tarefa deletada com sucesso!');
  };

  useEffect(() => {
    if (taskId && taskStatus) {
      setTasks((prevTasks) =>
        prevTasks.map((task) => {
          if (task.id !== taskId) {
            return task;
          } else {
            return { ...task, status: taskStatus };
          }
        })
      );
    }
  }, [taskId, taskStatus]);

  return (
    <div className="flex flex-1 flex-col gap-5 px-8 py-16">
      <TasksHeader />
      <TasksList
        tasks={tasks}
        getId={setTaskId}
        getStatus={setTaskStatus}
        handleDeleteClick={handleDeleteClick}
      />
    </div>
  );
};
export default Tasks;
