import TasksListItem from './TasksListItem';
import SunIcon from '../assets/icons/sun.svg?react';
import CloudSunIcon from '../assets/icons/cloud-sun.svg?react';
import MoonIcon from '../assets/icons/moon.svg?react';

const TasksListPeriod = ({ period, tasks }) => {
  return (
    <div className="mb-6 space-y-3 last:mb-0">
      <div className="flex items-center gap-2 border-b border-[hsl(240,20%,95%)] pb-1.5 text-sm font-medium text-[hsl(216,5%,60%)]">
        {period === 'manhã' && <SunIcon />}
        {period === 'tarde' && <CloudSunIcon />}
        {period === 'noite' && <MoonIcon />}
        <p>{period.charAt(0).toUpperCase() + period.slice(1)}</p>
      </div>
      {tasks
        .filter((task) => task.period === period)
        .map((task) => (
          <TasksListItem key={task.id} task={task} />
        ))}
    </div>
  );
};
export default TasksListPeriod;
