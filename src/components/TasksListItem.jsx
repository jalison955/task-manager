import LoaderIcon from '../assets/icons/loader.svg?react';
import CheckIcon from '../assets/icons/check.svg?react';
import DetailsIcon from '../assets/icons/details.svg?react';
import TrashIcon from '../assets/icons/trash.svg?react';
import Button from './Button';
import { useState } from 'react';

const TasksListItem = ({ task, getId, getStatus, handleDeleteClick }) => {
  const [status, setStatus] = useState(task.status);
  let newStatus;

  const handleStatusChange = () => {
    if (status === 'waiting') {
      newStatus = 'progress';
    } else if (status === 'progress') {
      newStatus = 'done';
    } else if (status === 'done') {
      newStatus = 'waiting';
    }
    setStatus(newStatus);
    getStatus(newStatus);
    getId(task.id);
  };

  () => task.id;

  const statusStyle = {
    done: {
      btn: 'bg-[hsl(183,100%,35%)]',
      bg: 'bg-[hsl(183,60%,95%)]',
      text: 'text-[hsl(183,100%,35%)]',
      icon: <CheckIcon />,
    },
    progress: {
      btn: 'bg-[hsl(40,100%,50%)]',
      bg: 'bg-[hsl(40,100%,95%)]',
      text: 'text-[hsl(40,100%,50%)]',
      icon: <LoaderIcon className="animate-spin" />,
    },
    waiting: {
      btn: 'bg-[hsl(220,10%,85%)]',
      bg: 'bg-[hsl(220,10%,95%)]',
      text: 'text-[hsl(220,10%,25%)]',
      icon: null,
    },
  };

  return (
    <div
      className={`flex items-center justify-between rounded-md px-4 py-3 transition ${statusStyle[status].bg}`}
    >
      <div className="flex items-center gap-2 text-sm">
        <button
          onClick={handleStatusChange}
          className={`flex h-6 w-6 cursor-pointer items-center justify-center rounded-sm p-1 text-white transition hover:opacity-70 ${statusStyle[status].btn}`}
        >
          {statusStyle[status].icon}
        </button>
        <h2 className={statusStyle[status].text}>{task.title}</h2>
      </div>
      <div className="flex items-center gap-1">
        <Button variant="ghost" onClick={() => handleDeleteClick(task.id)}>
          <TrashIcon className="text-[hsl(216,5%,60%)]" />
        </Button>
        <a
          href="#"
          className="cursor-pointer bg-transparent transition hover:opacity-75"
        >
          <DetailsIcon />
        </a>
      </div>
    </div>
  );
};
export default TasksListItem;
