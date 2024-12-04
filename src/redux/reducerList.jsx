import { createReducer, createAction } from '@reduxjs/toolkit';


export const addTodo = createAction('ADD_TODO');
export const updateStatus = createAction('UPDATE_STATUS');
export const deleteTodo = createAction('DELETE_TODO');
export const setInput = createAction('SET_INPUT');
export const setDescription = createAction('SET_DESCRIPTION');
export const setDateFin = createAction('SET_DATE_FIN');

const initialState = {
  todos: [],
  input: '',
  description: '',
  dateFin: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodo, (state) => {
      state.todos.push({
        id: state.todos.length + 1,
        task: state.input,
        description: state.description,
        dateFin: state.dateFin,
        done: false,
        status: 'init',
        date: new Date(),
      });
      state.input = '';
      state.description = '';
      state.dateFin = '';
    })
    .addCase(updateStatus, (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.status = nextStatus(todo.status);
      }
    })
    .addCase(deleteTodo, (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    })
    .addCase(setInput, (state, action) => {
      state.input = action.payload;
    })
    .addCase(setDescription, (state, action) => {
      state.description = action.payload;
    })
    .addCase(setDateFin, (state, action) => {
      state.dateFin = action.payload;
    });
});

const nextStatus = (status) => {
  const next = { init: 'test', test: 'fin' };
  return next[status] || 'init';
};

export default reducer;
