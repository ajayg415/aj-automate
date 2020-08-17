import React from 'react';

import { TiTick } from 'react-icons/ti';
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
    <div className="rounded shadow-lg w-1/3 px-2 mx-4 w-full">
      <div className="py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
      </div>

      <div className="flex">
        <div className="font-semibold text-xl mb-2">Status :</div>
        <div className={`ml-8 rounded-full text-white ${status === 'completed' ? 'bg-green-500 hover:bg-green-600': 'bg-gray-500 hover:bg-gray-600'}`}>
          <button className="focus:outline-none">
            <TiTick className="status ml-2 mr-3 mt-1 react-icons workflow-icons" title={status} onClick={updateStatus}/>
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
          <li className="table-row text-sm">
            <span className="table-cell">Progress:</span> 
            <span className="table-cell pl-4">{progressTasks}</span>
          </li>
        </ul>
      </div>

      <div className="flex justify-evenly flex-col lg:flex-row my-4 sm:flex-col">
        <button className="bg-teal-300 border-b-2 focus:outline-none hover:bg-teal-400 px-3 py-1 my-1">
          <BsCardChecklist className="status ml-2 mr-3 mt-1 react-icons relative list-icon"/>
          <span>View List</span>
        </button>

        <button className="bg-red-400 border-b-2 focus:outline-none hover:bg-red-500 px-3 py-1 my-1" onClick={() => dispatchRemoveFlow(workflow)}>
          <RiDeleteBin6Line className="status ml-2 mr-3 mt-1 react-icons relative list-icon"/>
          <span>Delete</span>
        </button>
      </div>
    </div>
  )
};

export default WorkflowTile;