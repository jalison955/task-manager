import TasksListPeriod from './TasksListPeriod';
import SunIcon from '../assets/icons/sun.svg?react';
import CloudSunIcon from '../assets/icons/cloud-sun.svg?react';
import MoonIcon from '../assets/icons/moon.svg?react';

const TasksList = ({ tasks, getId, getStatus, handleDeleteClick }) => {
  const morningTasks = tasks.filter(
    (task) => task.period.toUpperCase() === 'MANHÃ'
  );
  const afternoonTasks = tasks.filter(
    (task) => task.period.toUpperCase() === 'TARDE'
  );
  const eveningTasks = tasks.filter(
    (task) => task.period.toUpperCase() === 'NOITE'
  );

  return (
    <div className="rounded-lg bg-white p-5 shadow-sm">
      {!tasks.length && (
        <div className="flex items-center justify-center text-lg font-semibold text-[hsl(220,10%,25%)]">
          Nenhuma tarefa adicionada ainda!
        </div>
      )}
      <TasksListPeriod
        period={'manhã'}
        icon={<SunIcon />}
        tasks={morningTasks}
        getId={getId}
        getStatus={getStatus}
        handleDeleteClick={handleDeleteClick}
      />
      <TasksListPeriod
        period={'tarde'}
        icon={<CloudSunIcon />}
        tasks={afternoonTasks}
        getId={getId}
        getStatus={getStatus}
        handleDeleteClick={handleDeleteClick}
      />
      <TasksListPeriod
        period={'noite'}
        icon={<MoonIcon />}
        tasks={eveningTasks}
        getId={getId}
        getStatus={getStatus}
        handleDeleteClick={handleDeleteClick}
      />
    </div>
  );
};
export default TasksList;
