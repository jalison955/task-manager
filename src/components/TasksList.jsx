import TasksListPeriod from './TasksListPeriod';
import SunIcon from '../assets/icons/sun.svg?react';
import CloudSunIcon from '../assets/icons/cloud-sun.svg?react';
import MoonIcon from '../assets/icons/moon.svg?react';

const TasksList = ({ tasks, getId, getStatus }) => {
  return (
    <div className="rounded-lg bg-white p-5 shadow-sm">
      <TasksListPeriod
        period={'manhã'}
        icon={<SunIcon />}
        tasks={tasks}
        getId={getId}
        getStatus={getStatus}
      />
      <TasksListPeriod
        period={'tarde'}
        icon={<CloudSunIcon />}
        tasks={tasks}
        getId={getId}
        getStatus={getStatus}
      />
      <TasksListPeriod
        period={'noite'}
        icon={<MoonIcon />}
        tasks={tasks}
        getId={getId}
        getStatus={getStatus}
      />
    </div>
  );
};
export default TasksList;
