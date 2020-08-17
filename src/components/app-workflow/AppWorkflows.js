import React from 'react';
import { connect } from 'react-redux';

import WorkflowHeader from './WorkflowHeader';
import WorkflowTile from './WorkflowTile'

const AppWorkflows = ({ workflows }) => {
  return (
    <div>
      <WorkflowHeader />
      
      <div className="m-5 flex">
        {workflows.map(workflow => {
          return <WorkflowTile key={workflow.id} workflow={workflow} />
        })}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  workflows: state.appReducer.workflows
})


export default connect(mapStateToProps)(AppWorkflows);