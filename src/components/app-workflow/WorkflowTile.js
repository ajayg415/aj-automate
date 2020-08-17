import React from 'react';

import { TiTick } from 'react-icons/ti';
import { RiDeleteBin6Line } from 'react-icons/ri';

const WorkflowTile = workflow => {
  const { name, status, tasks } = workflow.workflow
  const completedTasks = tasks.filter(task => task.status === 'completed').length;
  const pendingTasks = tasks.length - completedTasks
  console.log(name)
  return (
    <div className="rounded shadow-lg w-1/3 px-2 mx-4">
      <div className="py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
      </div>

      <div className="flex">
        <div className="font-semibold text-xl mb-2">Status :</div>
        <div className={`ml-8 rounded-full text-white ${status === 'completed' ? 'bg-green-500': 'bg-gray-500'}`}>
          <button className="focus:outline-none">
            <TiTick className="status ml-2 mr-3 mt-1 react-icons workflow-icons" title={status}/>
          </button>
        </div>
      </div>

      <div className="">
        <div className="font-semibold text-xl mb-2">Tasks Details:</div>
        <ul className="ml-4 table">
          <li className="table-row text-sm">
            <span className="table-cell">No. Of tasks:</span> 
            <span className="table-cell pl-4">{tasks.length}</span>
          </li>
          <li className="table-row text-sm">
            <span className="table-cell">Completed:</span> 
            <span className="table-cell pl-4">{completedTasks}</span>
          </li>
          <li className="table-row text-sm">
            <span className="table-cell">Pending:</span> 
            <span className="table-cell pl-4">{pendingTasks}</span>
          </li>
        </ul>
      </div>

      <div className="py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
      </div>
    </div>
  )
};

export default WorkflowTile;