import React, { useState } from 'react';
import { connect } from 'react-redux';

import { updateWorkflow } from '../../store/actions';

import TaskHeader from './TaskHeader';
import TaskTile from './TaskTile';

const AppTasks = ({ match, workflows, dispatchUpdateWorkflow }) => {
  const workflow = workflows.filter(workflow => workflow.id === match.params.id)[0];
  const [title, setTitle] = useState((workflow && workflow.name) || '')
  const [tasks, setTasks] = useState((workflow && workflow.tasks) || [])

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  
  const shuffleTasks = () => setTasks(shuffleArray(tasks))

  return (
    <div>
      <TaskHeader 
        title={title} 
        setTitle={setTitle} 
        shuffleTasks={shuffleTasks} 
        updateFlow={() => dispatchUpdateWorkflow({...workflow, name: title})}
      />

      <div className="gap-4 grid grid-cols-3 grid-rows-3 m-5 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4">
        {tasks && tasks.map(task => {
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

const mapDispatchToProps = dispatch => ({
  dispatchUpdateWorkflow: flow => dispatch(updateWorkflow(flow))
})

export default connect(mapStateToProps, mapDispatchToProps)(AppTasks);