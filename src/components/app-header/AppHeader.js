import React, { useEffect } from 'react';
import { FcFlowChart } from "react-icons/fc";
import { withRouter } from 'react-router-dom';

import './AppHeader.css'

const AppHeader = ({ dispatchLogOut, isAuth, history }) => {

  useEffect(() => {
    if(!isAuth) {
      history.push('/')
    }
  }, [isAuth])

  return (
    <div className="bg-pink-700 flex justify-between m-1 px-1 py-5">
      <div className="w-1/2">
        <FcFlowChart className="chart-icon"/> 
        <div className="inline-block mx-3 text-white company-name">AUTOMATE FLOW APP</div>
      </div>
      { isAuth &&
        <div className="w-1/2">
          <button 
            onClick={() => dispatchLogOut()}
            className="bg-white float-right font-semibold hover:bg-gray-200 mr-4 px-4 py-2 rounded" 
            type="button">
            Sign Out
          </button>
        </div>
      }
    </div>
  )
}

export default withRouter(AppHeader);