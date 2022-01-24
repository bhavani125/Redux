import React from 'react';
import './App.css';
import { createStore , applyMiddleware} from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';

import Header from './components/Header';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Header />
        <UserList />
        <AddUser />
      </div>
    </Provider>
  );
}

export default App;
