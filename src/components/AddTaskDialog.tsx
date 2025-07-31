import { createPortal } from 'react-dom';
import Button from './Button';
import Input from './Input';
import InputLabel from './InputLabel';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';
import './AddTaskDialog.css';
import SelecPeriod from './SelectPeriod';

const AddTaskDialog = ({ isOpen, setIsOpen }) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={800}
      classNames="add-task-dialog"
      unmountOnExit
    >
      <div>
        {createPortal(
          <div
            ref={nodeRef}
            className="fixed top-0 left-0 flex h-screen w-screen items-center justify-center backdrop-blur-[4px]"
          >
            <div className="flex w-84 flex-col gap-4 rounded-xl border border-[hsl(0,0%,97%)] bg-white p-5 text-center shadow-xs">
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

                <SelecPeriod />

                <Input
                  id="description"
                  label="Descrição"
                  placeholder="Descreva a tarefa"
                />
              </div>

              <div className="flex justify-center gap-3">
                <Button
                  onClick={() => setIsOpen(false)}
                  className="w-full"
                  size="large"
                  variant="secondary"
                >
                  <p className="text-center">Cancelar</p>
                </Button>

                <Button className="w-full" size="large">
                  <p className="text-center">Salvar</p>
                </Button>
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </CSSTransition>
  );
};
export default AddTaskDialog;
