import React from 'react';
import { connect } from 'react-redux';

import { clearMessage } from '../../store/actions'

const messageComponent = (type, appMessage, dispatchClearMessage) => (
  <div className={`bg-${type}-100 border border-${type}-400 text-${type}-700 px-4 py-1 rounded relative mx-24`} role="alert">
    <strong className="font-bold mr-2 capitalize">{appMessage.type}: </strong>
    <span className="block sm:inline">{appMessage.message}</span>
    <span className="absolute top-0 bottom-0 right-0 px-4 py-1">
      <svg 
        onClick={() => dispatchClearMessage()} 
        className={`fill-current h-6 w-6 text-${type}-500`}
        role="button" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 20 20">
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
      </svg>
    </span>
  </div>
)

const AppMessage = ({ appMessage, dispatchClearMessage}) => {
  const type = appMessage && appMessage.type === 'error' ? 'red': 'teal';
  
  return Object.keys(appMessage).length ? messageComponent(type, appMessage, dispatchClearMessage): ''
}

const mapDispatchToProps = dispatch => ({
  dispatchClearMessage: () => dispatch(clearMessage())
})

const mapStateToProps = state => ({
  appMessage: state.appReducer.appMessage
})

export default connect(mapStateToProps, mapDispatchToProps)(AppMessage);