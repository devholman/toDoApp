import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';


export default props => (
  <div>
    <TextField
      onChange={props.onChange}
      name='Add-Todo'
      onSubmit={props.addTodo}
      value={props.inputValue}
    />
    <FlatButton
      label='Add'
      onClick={props.addTodo}
    />
  </div>
);
