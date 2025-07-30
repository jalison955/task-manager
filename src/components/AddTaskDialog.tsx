import { createPortal } from 'react-dom';
import Button from './Button';

const AddTaskDialog = ({ isOpen, setIsOpen }) => {
  const handleClose = () => {
    setIsOpen(false); // This is a placeholder. In a real application, you would use a state management solution to handle the open/close state.
  };
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className="fixed top-0 left-0 flex h-screen w-screen items-center justify-center backdrop-blur-[4px]">
      <div className="flex flex-col gap-2 rounded-xl bg-white p-5 text-center shadow">
        <div className="flex flex-col gap-1 text-center">
          <h2 className="text-xl font-semibold text-[hsl(220,10%,25%)]">
            Nova Tarefa
          </h2>
          <p className="text-sm text-[hsl(216,5%,60%)]">
            Insira as informações abaixo
          </p>
        </div>
        <Button onClick={handleClose}>Fechar</Button>
      </div>
    </div>,
    document.body
  );
};
export default AddTaskDialog;
