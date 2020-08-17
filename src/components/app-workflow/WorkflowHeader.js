import React from 'react';

import { BsSearch } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

import './workflow.css'

const WorkflowHeader = ({ search, setSearch, filter, setFilter }) => {
  return (
    <div className="border-b-2 border-gray-500 flex justify-between py-5 workflow">

      <div className="flex justify-between">
        <div className="border flex ml-10 w-full search-box control">
          <BsSearch className="mr-3 ml-1 workflow-icons relative" />
          <input type="text" className="focus:outline-none w-full" value={search} onChange={e => setSearch(e.target.value)}/>
        </div>
        
        <div className="border border-gray-500 flex ml-6 control">
          <FaFilter className="mr-3 ml-1 workflow-icons relative" />
          <select className="appearance-none focus:outline-none" value={filter} onChange={e=> setFilter(e.target.value)}>
            <option value="-1">Filter</option>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>

      <div className="bg-blue-500 hover:bg-blue-600 border control mr-10 text-white">
        <IoMdAdd className="mr-3 ml-1 workflow-icons" />
        <button className="focus:outline-none font-bold pr-4 py-1" type="button">
          Create WorkFlow
        </button>
      </div>

    </div>
  )
};

export default WorkflowHeader;