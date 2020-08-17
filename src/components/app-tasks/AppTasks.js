import React, { useState } from 'react';
import { connect } from 'react-redux'

import TaskHeader from './TaskHeader'
import TaskTile from './TaskTile'

const AppTasks = ({ match, workflows }) => {
  const workflow = workflows.filter(workflow => workflow.id === match.params.id)[0];
  //const { name, tasks} = workflow;
  const [title, setTitle] = useState((workflow && workflow.name) || '')
  return (
    <div>
      <TaskHeader title={title} setTitle={setTitle} />

      <div className="gap-4 grid grid-cols-3 grid-rows-3 m-5 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4">
        {workflow && workflow.tasks.map(task => {
          return <TaskTile 
            key={task.id}
            task={task}
          />
        })}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  workflows: state.appReducer.workflows
})

export default connect(mapStateToProps)(AppTasks);