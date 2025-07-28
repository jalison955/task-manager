import TasksListItem from './TasksListItem';

const TasksListPeriod = ({ period, icon, tasks, getId, getStatus }) => {
  return (
    <div className="mb-6 space-y-3 last:mb-0">
      <div className="flex items-center gap-2 border-b border-[hsl(240,20%,95%)] pb-1.5">
        {icon}
        <p className="text-sm font-medium text-[hsl(216,5%,60%)]">
          {period.charAt(0).toUpperCase() + period.slice(1)}
        </p>
      </div>
      {tasks
        .filter((task) => task.period === period)
        .map((task) => (
          <TasksListItem
            key={task.id}
            task={task}
            getId={getId}
            getStatus={getStatus}
          />
        ))}
    </div>
  );
};
export default TasksListPeriod;
