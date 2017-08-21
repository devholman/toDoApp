import React, { Component} from 'react';
import Toggle from 'material-ui/Toggle';

export default props => (
   <span>
   <Toggle
      label={props.todo.title}
      defaultToggled={props.completed ? true : false}
      onToggle={() => props.completeTodo(props.todoId)}
      style={{
      textDecoration : props.completed ? 'line-through' : 'none',

        marginBottom : 16 }}
      />
    </span>
);


