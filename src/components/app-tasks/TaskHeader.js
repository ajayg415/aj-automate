import React, { useState } from 'react';

import { FaEdit, FaRegSave } from "react-icons/fa";
import { BsShuffle } from "react-icons/bs";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineFileAdd } from 'react-icons/ai';


const TaskHeader = ({ title, setTitle }) => {
  const [edit, setEdit] = useState(false)
  
  return (
    <div className="border-b-2 border-gray-500 flex justify-between py-5 workflow">
      { edit ?
        <div className="border flex ml-10">
          <input 
            type="text" 
            className="focus:outline-none w-full" 
            value={title} 
            onChange={e=> setTitle(e.target.value)}
            onBlur={()=>setEdit(false)}
          />
        </div>
        :
        <div className="flex ml-5">
          <span className="font-semibold mr-2">{title}</span>
          <FaEdit className="mr-3 ml-1 workflow-icons relative" onClick={()=>setEdit(true)} />
        </div>
      }
      
      <div className="flex justify-between">
        <div className="bg-blue-500 hover:bg-blue-600 border control mr-2 text-white">
          <BsShuffle className="mr-3 ml-1 workflow-icons" />
          <button className="focus:outline-none font-bold pr-4 py-1" type="button">
            Shuffle
          </button>
        </div>

        <div className="bg-blue-500 hover:bg-blue-600 border control mr-2 text-white">
          <RiDeleteBin6Line className="mr-3 ml-1 workflow-icons" />
          <button className="focus:outline-none font-bold pr-4 py-1" type="button">
            Delete
          </button>
        </div>

        <div className="bg-blue-500 hover:bg-blue-600 border control mr-2 text-white">
          <AiOutlineFileAdd className="mr-3 ml-1 workflow-icons" />
          <button className="focus:outline-none font-bold pr-4 py-1" type="button">
            Add Note
          </button>
        </div>

        <div className="bg-blue-500 hover:bg-blue-600 border control mr-2 text-white">
          <FaRegSave className="mr-3 ml-1 workflow-icons" />
          <button className="focus:outline-none font-bold pr-4 py-1" type="button">
            Save
          </button>
        </div>
      </div>
    </div>
  )
};

export default TaskHeader;