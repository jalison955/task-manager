import { createPortal } from 'react-dom';
import Button from './Button';
import Input from './Input';

const AddTaskDialog = ({ isOpen, setIsOpen }) => {
  const handleClose = () => {
    setIsOpen(false); // This is a placeholder. In a real application, you would use a state management solution to handle the open/close state.
  };
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className="fixed top-0 left-0 flex h-screen w-screen items-center justify-center backdrop-blur-[4px]">
      <div className="flex w-84 flex-col gap-4 rounded-xl bg-white p-5 text-center shadow">
        <div className="flex flex-col gap-1 text-center">
          <h2 className="text-xl font-semibold text-[hsl(216,10%,25%)]">
            Nova Tarefa
          </h2>
          <p className="text-sm text-[hsl(216,5%,60%)]">
            Insira as informações abaixo
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Input
            id="title"
            label="Titulo"
            placeholder="Insira o título da tarefa"
          />

          <Input id="period" label="Horário" placeholder="Horário" />

          <Input
            id="description"
            label="Descrição"
            placeholder="Descreva a tarefa"
          />
        </div>
        <div className="flex justify-center gap-3">
          <Button
            onClick={handleClose}
            className="w-full"
            size="large"
            variant="secondary"
          >
            <p className="text-center">Cancelar</p>
          </Button>

          <Button onClick={handleClose} className="w-full" size="large">
            <p className="text-center">Salvar</p>
          </Button>
        </div>
      </div>
    </div>,
    document.body
  );
};
export default AddTaskDialog;
