import React, { useState } from 'react'
import { connect } from 'react-redux'
import { TiMail } from "react-icons/ti";
import { RiLockPasswordLine } from "react-icons/ri";

import { chkLogin } from '../../store/actions'

import './AppLogin.css'

const AppLogin = ({ dispatchCheckLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [valid, setValid] = useState(true)

  const submitForm = () => {
    if(username === '' || password === ''){
      setValid(false)
    } else {
      dispatchCheckLogin({ username, password })
    }
  }

  const setData = e => {
    const el = e.target
    if(el.value.length > 0){
      setValid(true)
      el.type === 'text'? setUsername(el.value) : setPassword(el.value)
    }
  }

  return (
    <div className="flex justify-center mt-32">
      <div className="shadow-2xl">
        <form className="login-form bg-white shadow-md rounded px-8 pt-6 pb-8">
          
          <div className="flex font-semibold justify-center p-4">
            <h2>Login</h2>
          </div>

          <div className={`border border-gray-500 flex mb-6 p-2 rounded ${!valid && username === "" ? "border-red-500" : ""}`}>
            <TiMail />
            <input value={username} onChange={setData} placeholder="Email" type="text" className="appearance-none border-0 focus:outline-none ml-2 text-gray-700 w-11/12"/>
          </div>

          <div className={`border border-gray-500 flex p-2 rounded ${!valid && password === "" ? "border-red-500" : ""}`}>
            <RiLockPasswordLine />
            <input value={password} onChange={e=> setPassword(e.target.value)}placeholder="Password" type="password" className="appearance-none border-0 focus:outline-none ml-2 text-gray-700 w-11/12"/>
          </div>

          <p className="mb-6 text-gray-500 text-xs">
            <i>Hint</i>: Enter "admin" as usernamd and password.
          </p>

          <div className="flex items-center justify-between">
            <button onClick={submitForm} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Sign In
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchCheckLogin: userObj => dispatch(chkLogin(userObj))
})

export default connect(null, mapDispatchToProps)(AppLogin);