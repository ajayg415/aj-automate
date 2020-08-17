import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { removeWorkflow } from '../../store/actions'

import WorkflowHeader from './WorkflowHeader';
import WorkflowTile from './WorkflowTile'

const AppWorkflows = ({ workflows, dispatchRemoveFlow }) => {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('-1')
  const [cards, setCards] = useState([...workflows])

  useEffect(() => {
    setCards([...workflows])
  },[workflows])

  useEffect(() => {
    let flows = []
    if(filter == 'all' || filter == '-1'){
      flows = [...workflows]
    }else{
      flows = workflows.filter(workflow => workflow.status === filter)
    }

    setCards(flows.filter(workflow =>{
      return workflow.name.toLowerCase().indexOf(search.toLowerCase()) === 0
    }))
  },[search, filter])

  return (
    <div>
      <WorkflowHeader search={search} setSearch={setSearch} filter={filter} setFilter={setFilter}/>
      {cards.length > 0 ?
        <div className="gap-4 grid grid-cols-3 grid-rows-3 m-5 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map(workflow => {
            return <WorkflowTile key={workflow.id} workflow={workflow} dispatchRemoveFlow={dispatchRemoveFlow} />
          })}
        </div>
      :
        <div className="flex font-semibold justify-center mt-56">
          <span>No Workflows to show. Please add new workflow using 'Create Workflow' button</span>
        </div>
      }
    </div>
  )
}

const mapStateToProps = state => ({
  workflows: state.appReducer.workflows
})

const mapDispatchToProps = dispatch => ({
  dispatchRemoveFlow: flow => dispatch(removeWorkflow(flow))
})


export default connect(mapStateToProps, mapDispatchToProps)(AppWorkflows);