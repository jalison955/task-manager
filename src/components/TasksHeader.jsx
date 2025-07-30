import Button from './Button';
import { TrashIcon, AddIcon } from '../assets/icons';

const TasksHeader = () => {
  return (
    <div className="flex justify-between px-2">
      <div>
        <span className="text-xs font-semibold text-[hsl(183,100%,35%)]">
          Minhas Tarefas
        </span>
        <h2 className="text-xl font-semibold text-[hsl(220,10%,25%)]">
          Minhas Tarefas
        </h2>
      </div>

      <div className="flex items-end gap-2">
        <Button variant="ghost">
          Limpar tarefas
          <TrashIcon />
        </Button>

        <Button>
          <AddIcon />
          Adicionar tarefa
        </Button>
      </div>
    </div>
  );
};
export default TasksHeader;
