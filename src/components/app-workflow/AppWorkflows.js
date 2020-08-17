import React from 'react';
import { connect } from 'react-redux';

import WorkflowHeader from './WorkflowHeader';
import WorkflowTile from './WorkflowTile'

const AppWorkflows = ({ workflows }) => {
  return (
    <div>
      <WorkflowHeader />
      
      <div className="gap-4 grid grid-cols-3 grid-rows-3 m-5 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4">
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