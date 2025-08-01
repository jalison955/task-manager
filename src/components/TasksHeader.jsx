import { useState } from 'react';

import { AddIcon, TrashIcon } from '../assets/icons';
import AddTaskDialog from './AddTaskDialog';
import Button from './Button';

const TasksHeader = ({ idAtual, getNewId, addTask }) => {
  const [isOpen, setIsOpen] = useState(false);

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

        <Button onClick={() => setIsOpen(true)}>
          <AddIcon />
          Adicionar tarefa
        </Button>
      </div>

      <AddTaskDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        idAtual={idAtual}
        getNewId={getNewId}
        addTask={addTask}
      />
    </div>
  );
};
export default TasksHeader;
