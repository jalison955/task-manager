import './AddTaskDialog.css';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import Button from './Button';
import Input from './Input';
import InputError from './InputError';
import SelecPeriod from './SelectPeriod';

const AddTaskDialog = ({ isOpen, setIsOpen, idAtual, getNewId, addTask }) => {
  const nodeRef = useRef(null);
  const newId = idAtual + 1;
  const [errors, setErrors] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [period, setPeriod] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setTitle('');
      setDescription('');
      setPeriod('default');
    }
  }, [isOpen]); // ou usar a função clearInputs e chamá-la no handleAddTask

  const checkErrors = () => {
    const newErrors = [];

    if (!title.trim()) {
      newErrors.push({
        inputName: 'title',
        message: 'O título é obrigatório.',
      });
    }
    if (!description.trim()) {
      newErrors.push({
        inputName: 'description',
        message: 'A descrição é obrigatória.',
      });
    }
    if (!period.trim() || period === 'default') {
      newErrors.push({
        inputName: 'period',
        message: 'O período é obrigatório.',
      });
    }

    setErrors(newErrors);

    if (newErrors.length > 0) {
      return true;
    }
  };

  const handleAddTask = () => {
    if (checkErrors()) return;

    const task = {
      id: idAtual + 1,
      title,
      description,
      period,
      status: 'waiting',
    };
    addTask(task);
    setIsOpen(false);
    getNewId(newId);
  };

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
            className="fixed top-0 left-0 flex h-screen w-screen items-center justify-center backdrop-blur"
          >
            <div className="flex w-84 flex-col gap-4 rounded-xl border border-[hsl(0,0%,97%)] bg-white p-5 text-center shadow-sm">
              <div className="flex flex-col gap-1 text-center">
                <h2 className="text-xl font-semibold text-[hsl(216,10%,25%)]">
                  Nova Tarefa
                </h2>
                <p className="text-sm text-[hsl(216,5%,60%)]">
                  Insira as informações abaixo
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <Input
                    id="title"
                    label="Titulo *"
                    placeholder="Insira o título da tarefa"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <InputError errors={errors} inputName="title" />
                </div>

                <div className="flex flex-col gap-1">
                  <SelecPeriod
                    value={period}
                    onChange={(e) => setPeriod(e.target.value)}
                  />
                  <InputError errors={errors} inputName="period" />
                </div>

                <div className="flex flex-col gap-1">
                  <Input
                    id="description"
                    label="Descrição *"
                    placeholder="Descreva a tarefa"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <InputError errors={errors} inputName="description" />
                </div>
              </div>

              <div className="flex justify-center gap-3">
                <Button
                  onClick={() => {
                    setIsOpen(false);
                    setErrors([]);
                  }}
                  className="w-full"
                  size="large"
                  variant="secondary"
                >
                  <p className="text-center">Cancelar</p>
                </Button>

                <Button className="w-full" size="large" onClick={handleAddTask}>
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
