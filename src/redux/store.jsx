import { configureStore } from '@reduxjs/toolkit';
import reducerList from './reducerList';

const store = configureStore({
  reducer: {
    todos: reducerList,
  },
});

export default store;
