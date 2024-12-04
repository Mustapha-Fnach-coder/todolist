import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './components/input';
import Lists from './components/lists';
import { Provider } from 'react-redux';
import Store from './redux/store';

function App() {
  return (
    <Provider store={Store}>
      <div className="container-fluid">
        <div className="App">
          <Input />
          <Lists />
        </div>
      </div>
    </Provider>
  );
}

export default App;
