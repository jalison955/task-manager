import Button from './Button';
import TrashIcon from '../assets/icons/trash.svg?react';
import AddIcon from '../assets/icons/add.svg?react';

const Header = () => {
  return (
    <div className="flex justify-between">
      <div>
        <span className="text-xs font-semibold text-[hsl(183,100%,35%)]">
          Minhas Tarefas
        </span>
        <h2 className="text-xl font-semibold">Minhas Tarefas</h2>
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
export default Header;
