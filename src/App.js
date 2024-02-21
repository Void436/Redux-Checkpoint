import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div id='testttt'>
        <h1><strong>My tasks</strong></h1><br />
        <AddTask /><br />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;