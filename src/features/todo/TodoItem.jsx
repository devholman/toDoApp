import React, { Component} from 'react';
import Toggle from 'material-ui/Toggle';

export default props => (
   <span
    style={{
      textDecoration : props.completed ? 'line-through' : 'none'
    }}
  >
      {props.todo.todo}
      <Toggle
        label={'Complete'}
        onToggle={() => props.completeTodo(props.todoId)}
        onClick={() => props.completeTodo(props.todoId)}
        style={{ marginBottom : 16 }}
      />
    </span>
);


