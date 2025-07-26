const TasksListItem = ({ task }) => {
  return (
    <div className="flex items-center justify-between px-3">
      <h2>{task.title}</h2>
      <p>Status: {task.completed ? 'Concluída' : 'Pendente'}</p>
    </div>
  );
};
export default TasksListItem;
