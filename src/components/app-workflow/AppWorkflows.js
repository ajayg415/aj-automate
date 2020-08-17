import React from 'react';
import { connect } from 'react-redux';

import WorkflowHeader from './WorkflowHeader';
import WorkflowTile from './WorkflowTile'

const AppWorkflows = ({ workflows }) => {
  console.log('workflows :', workflows)
  return (
    <div>
      <WorkflowHeader />
      
      <WorkflowTile />
    </div>
  )
}

const mapStateToProps = state => ({
  workflows: state.appReducer.workflows
})


export default connect(mapStateToProps)(AppWorkflows);