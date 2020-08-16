import React from 'react';
import { FcFlowChart } from "react-icons/fc";

import './AppHeader.css'

const AppHeader = () => {
  return (
    <div className="bg-pink-700 flex justify-between m-1 px-1 py-5">
      <div className="w-1/2">
        <FcFlowChart className="chart-icon"/> 
        <div className="inline-block mx-3 text-white company-name">AUTOMATE FLOW APP</div>
      </div>
    </div>
  )
}

export default AppHeader;