import React from 'react';

import { TiTick } from 'react-icons/ti';

const TaskTile = ({ task }) => {
  const {id, name, description, status} = task;
  return (
    <div className="rounded shadow-lg w-1/3 px-2 mx-4 w-full">
      <div className="py-4">
        <div className="font-bold text-xl mb-2 capitalize">{name}</div>
      </div>

      <div className="flex">
        <div className="font-semibold text-xl mb-2">Status :</div>
        <div className={`ml-8 rounded-full text-white ${status === 'completed' ? 'bg-green-500 hover:bg-green-600': 'bg-gray-500 hover:bg-gray-600'}`}>
          <button className="focus:outline-none">
            <TiTick className="status ml-2 mr-3 mt-1 react-icons workflow-icons" title={status} />
          </button>
        </div>
      </div>

      <div className="my-4 text-sm">
        {description}
      </div>
    </div>
  )
}

export default TaskTile;