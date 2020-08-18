import React from 'react';

import { IoMdCheckmark } from 'react-icons/io';

const TaskTile = ({ task, updateTasks }) => {
  const {id, name, description, status} = task;
  let classList = {
    'progress': 'bg-gray-300 hover:bg-gray-400 text-gray-800',
    'pending': 'bg-blue-300 hover:bg-blue-400 text-blue-800',
    'completed': 'bg-green-300 hover:bg-green-400 text-green-800'
  };

  const updateStatus = () => {
    const st = (status === 'progress' ? 'pending' : (status === 'pending' ? 'completed' : 'progress'))
    updateTasks({...task, status: st})
  }

  return (
    <div className="rounded shadow-lg w-1/3 px-2 mx-4 w-full">
      <div className="py-4">
        <div className="font-bold text-xl mb-2 capitalize">{name}</div>
      </div>

      <div className="flex">
        <div className="font-semibold text-xl mb-2">Status :</div>

        <button
          className={`ml-8 font-bold px-2 rounded inline-flex items-center ${classList[status]}`}
          onClick={updateStatus}
        >
          <IoMdCheckmark className="fill-current w-4 h-4 mr-2" title={status} />
          <span className="capitalize font-semibold text-sm">{status}</span>
        </button>
      </div>

      <div className="my-4 text-sm">
        {description}
      </div>
    </div>
  )
}

export default TaskTile;