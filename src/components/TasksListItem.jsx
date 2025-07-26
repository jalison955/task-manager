import LoaderIcon from '../assets/icons/loader.svg?react';
import CheckIcon from '../assets/icons/check.svg?react';
import DetailsIcon from '../assets/icons/details.svg?react';

const TasksListItem = ({ task }) => {
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
      icon: <LoaderIcon />,
    },
    waiting: {
      btn: 'bg-[hsl(220,10%,60%)]',
      bg: 'bg-[hsl(220,10%,95%)]',
      text: 'text-[hsl(220,10%,25%)]',
      icon: null,
    },
  };

  return (
    <div
      className={`flex items-center justify-between rounded-md px-4 py-3 ${statusStyle[task.status].bg}`}
    >
      <div className="flex items-center gap-2 text-sm">
        <button
          className={`flex h-6 w-6 items-center justify-center rounded-sm p-1 text-white hover:opacity-75 hover:transition ${statusStyle[task.status].btn}`}
        >
          {statusStyle[task.status].icon}
        </button>
        <h2 className={statusStyle[task.status].text}>{task.title}</h2>
      </div>
      <button className="cursor-pointer bg-transparent transition hover:opacity-75">
        <DetailsIcon />
      </button>
    </div>
  );
};
export default TasksListItem;
