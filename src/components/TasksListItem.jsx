import LoaderIcon from '../assets/icons/loader.svg?react';
import CheckIcon from '../assets/icons/check.svg?react';
import DetailsIcon from '../assets/icons/details.svg?react';
import { useState } from 'react';

const TasksListItem = ({ task }) => {
  const [status, setStatus] = useState(task.status);

  const handleStatusChange = () => {
    if (status === 'waiting') {
      setStatus('progress');
    } else if (status === 'progress') {
      setStatus('done');
    } else if (status === 'done') {
      setStatus('waiting');
    }
  };

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
      <button className="cursor-pointer bg-transparent transition hover:opacity-75">
        <DetailsIcon />
      </button>
    </div>
  );
};
export default TasksListItem;
