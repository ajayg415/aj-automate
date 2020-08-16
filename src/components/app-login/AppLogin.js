import React from 'react'
import { TiMail } from "react-icons/ti";
import { RiLockPasswordLine } from "react-icons/ri";

import './AppLogin.css'

const AppLogin = () => {
  return (
    <div className="flex justify-center mt-32">
      <div className="shadow-2xl">
        <form class="login-form bg-white shadow-md rounded px-8 pt-6 pb-8">
          
          <div className="flex font-semibold justify-center p-4">
            <h2>Login</h2>
          </div>

          <div className="border border-gray-500 flex mb-6 p-2 rounded">
            <TiMail />
            <input placeholder="Email" type="text" className="appearance-none border-0 focus:outline-none ml-2 text-gray-700 w-11/12"/>
          </div>

          <div className="border border-gray-500 flex mb-6 p-2 rounded">
            <RiLockPasswordLine />
            <input placeholder="Password" type="password" className="appearance-none border-0 focus:outline-none ml-2 text-gray-700 w-11/12"/>
          </div>

          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Sign In
            </button>
            <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AppLogin