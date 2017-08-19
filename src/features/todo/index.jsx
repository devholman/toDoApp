import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { addTodo, completedTodo } from './todo.reducer';
import TodoItem from './TodoItem.jsx';
import AddTodo from './AddTodo.jsx';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';

const style = {
  height: 600,
  width: 800,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};
const mapStateToProps = state => ({ todos : state.Todos });
const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
  completedTodo:  (id) => dispatch(completedTodo(id))
})

@connect(mapStateToProps, mapDispatchToProps)
class Todo extends Component {
  state = {
    inputValue : ''
  }
  onChange = e => {
    this.setState({ inputValue : e.target.value });
  }
  addTodo = e => {
    this.props.addTodo({ todo : this.state.inputValue });
    this.setState({ inputValue : '' });
  }
  completeTodo = (id) => {
    this.props.completedTodo(id);
  }

  render() {
    return (
      <div>
        <AppBar
         title='Todo List'

        />

        <AddTodo
          inputValue={this.state.inputValue}
          onChange={this.onChange}
          addTodo={this.addTodo}
        />
        <Paper style={style}>
        {this.props.todos
            .map(todo => <TodoItem
              completeTodo={this.completeTodo}
              completed={todo.completed}
              todoId={todo.id}
              todo={todo}
              key={todo.id} /> )}
          </Paper>
      </div>
  );
  }
}

export default Todo;
