import TasksListItem from './TasksListItem';

const TasksListPeriod = ({
  period,
  icon,
  tasks,
  getId,
  getStatus,
  handleDeleteClick,
}) => {
  return (
    tasks.length > 0 && (
      <div className="mb-6 space-y-3 last:mb-0">
        <div className="flex items-center gap-2 border-b border-[hsl(240,20%,95%)] pb-1.5">
          {icon}
          <p className="text-sm font-medium text-[hsl(216,5%,60%)]">
            {period.charAt(0).toUpperCase() + period.slice(1)}
          </p>
        </div>
        {tasks.map((task) => (
          <TasksListItem
            key={task.id}
            task={task}
            getId={getId}
            getStatus={getStatus}
            handleDeleteClick={handleDeleteClick}
          />
        ))}
      </div>
    )
  );
};
export default TasksListPeriod;
