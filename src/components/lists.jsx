import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  deleteTodo, updateStatus } from '../redux/action';

const Lists = () => {
    const todos = useSelector((state) => state.todos);
    debugger
    console.log(todos);  

    const dispatch = useDispatch();

    const statuses = ['init', 'test', 'fin'];

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-center text-2xl font-bold mb-6">Your Tasks</h2>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            {statuses.map((status) => (
                                <th
                                    key={status}
                                    className="text-center border border-gray-300 p-3 text-lg"
                                >
                                    {status.toUpperCase()}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {statuses.map((status) => (
                                <td key={status} className="border border-gray-300 p-3 w-1/3 align-top">
                                    {todos
                                        .filter((todo) => todo.status === status)
                                        .map((todo) => (
                                            <div
                                                key={todo.id}
                                                className={`p-4 mb-4 rounded shadow ${
                                                    todo.done ? 'bg-green-500' : 'bg-gray-500'
                                                } text-white`}
                                            >
                                                <p className="font-bold">Nom: {todo.task}</p>
                                                <p>Description: {todo.description}</p>
                                                <p>Date Fin: {todo.dateFin}</p>
                                                <div className="flex justify-between mt-4">
                                                    
                                                    <button
                                                        onClick={() => dispatch(deleteTodo(todo.id))}
                                                        className="px-3 py-1 bg-red-500 rounded hover:bg-red-700"
                                                    >
                                                        Supprimer
                                                    </button>
                                                    <button
                                                        onClick={() => dispatch(updateStatus(todo.id))}
                                                        className="px-3 py-1 bg-yellow-500 rounded hover:bg-yellow-700"
                                                    >
                                                        Prochain statut
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Lists;
