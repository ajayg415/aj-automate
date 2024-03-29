import React from 'react';
import { Link } from 'react-router-dom';

import { IoMdCheckmark } from 'react-icons/io';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BsCardChecklist } from 'react-icons/bs';

const WorkflowTile = ({ workflow, dispatchRemoveFlow, dispatchShowMessage, dispatchUpdateWorkflow }) => {
  const { name, status, tasks } = workflow
  const completedTasks = tasks.filter(task => task.status === 'completed').length;
  const pendingTasks = tasks.filter(task => task.status === 'pending').length
  const progressTasks = tasks.length - (completedTasks + pendingTasks)

  const updateStatus = () => {
    if( status === 'pending'){
      if(pendingTasks > 0 || progressTasks>0){
        dispatchShowMessage({
          type: 'error',
          message: 'Workflow have penging / in-progress tasks, please complete them before updating workflow status.'
        })
      }else{
        dispatchUpdateWorkflow({...workflow, status: 'completed'})
      }
    }else{
      dispatchUpdateWorkflow({...workflow, status: 'pending'})
    }
  }

  return (
    <div className="px-2 rounded shadow-lg">
      <div className="py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
      </div>

      <div className="flex">
        <div className="font-semibold text-xl mb-2">Status :</div>
        <button
          onClick={updateStatus}
          className={`ml-8 font-bold px-2 rounded inline-flex items-center ${status === 'completed' ? 'bg-green-300 hover:bg-green-400 text-green-800': 'bg-gray-300 hover:bg-gray-400 text-gray-800'}`}
        >
          <IoMdCheckmark className="fill-current w-4 h-4 mr-2" title={status} />
          <span className="capitalize font-semibold text-sm">{status}</span>
        </button>

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
          <li className="table-row text-sm">
            <span className="table-cell">Progress:</span>
            <span className="table-cell pl-4">{progressTasks}</span>
          </li>
        </ul>
      </div>

      <div className="flex justify-evenly flex-col lg:flex-row my-4 sm:flex-col">
        <Link to={`/workflows/${workflow.id}`}>
          <button className="bg-teal-300 border-b-2 focus:outline-none hover:bg-teal-400 px-3 py-1 my-1">
            <BsCardChecklist className="status ml-2 mr-3 mt-1 react-icons relative list-icon"/>
            <span>View List</span>
          </button>
        </Link>

        <button className="bg-red-400 border-b-2 focus:outline-none hover:bg-red-500 px-3 py-1 my-1" onClick={() => dispatchRemoveFlow(workflow)}>
          <RiDeleteBin6Line className="status ml-2 mr-3 mt-1 react-icons relative list-icon"/>
          <span>Delete</span>
        </button>
      </div>
    </div>
  )
};

export default WorkflowTile;