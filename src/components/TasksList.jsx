import TasksListPeriod from './TasksListPeriod';

const TasksList = ({ tasks }) => {
  return (
    <div className="rounded-lg bg-white p-5 shadow-sm">
      <TasksListPeriod period={'manhã'} tasks={tasks} />
      <TasksListPeriod period={'tarde'} tasks={tasks} />
      <TasksListPeriod period={'noite'} tasks={tasks} />
    </div>
  );
};
export default TasksList;
