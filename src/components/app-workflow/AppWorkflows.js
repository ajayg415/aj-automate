import React from 'react';
import { connect } from 'react-redux';

const AppWorkflows = ({ workflows }) => {
  console.log('workflows :', workflows)
  return (
    <div>
      content from AppWorkflows
    </div>
  )
}

const mapStateToProps = state => ({
  workflows: state.appReducer.workflows
})


export default connect(mapStateToProps)(AppWorkflows);