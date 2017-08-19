import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store/store'; // add this (before import App !!!)
import Todo from './features/todo';
import { Provider } from 'react-redux'; // add this
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Todo />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
injectTapEventPlugin();
