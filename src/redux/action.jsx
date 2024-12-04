
export const addTodo = () => ({ type: 'ADD_TODO' });
export const updateStatus = (id) => ({ type: 'UPDATE_STATUS', payload: id });
export const deleteTodo = (id) => ({ type: 'DELETE_TODO', payload: id });
export const setInput = (input) => ({ type: 'SET_INPUT', payload: input });
export const setDescription = (description) => ({ type: 'SET_DESCRIPTION', payload: description });
export const setDateFin = (dateFin) => ({ type: 'SET_DATE_FIN', payload: dateFin });
