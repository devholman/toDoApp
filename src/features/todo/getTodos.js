import axios from 'axios';
import _ from 'lodash';

export const loadTodos = data => axios.get('https://jsonplaceholder.typicode.com/todos');
