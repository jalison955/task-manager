import TasksListPeriod from './TasksListPeriod';
import SunIcon from '../assets/icons/sun.svg?react';
import CloudSunIcon from '../assets/icons/cloud-sun.svg?react';
import MoonIcon from '../assets/icons/moon.svg?react';

const TasksList = ({ tasks }) => {
  return (
    <div className="rounded-lg bg-white p-5 shadow-sm">
      <TasksListPeriod period={'manhã'} icon={<SunIcon />} tasks={tasks} />
      <TasksListPeriod period={'tarde'} icon={<CloudSunIcon />} tasks={tasks} />
      <TasksListPeriod period={'noite'} icon={<MoonIcon />} tasks={tasks} />
    </div>
  );
};
export default TasksList;
