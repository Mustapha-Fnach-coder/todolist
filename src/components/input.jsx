import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setInput, setDescription, setDateFin, addTodo } from '../redux/action';

const Input = () => {
    const { input, description, dateFin } = useSelector((state) => state);
    const dispatch = useDispatch();

    return (
        <div className="container mx-auto mt-6">
            <div className="w-2/5 mx-auto p-6 rounded bg-gray-100 shadow">
                <input
                    type="text"
                    className="block w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                    placeholder="Ajouter une tâche"
                    value={input}
                    onChange={(e) => dispatch(setInput(e.target.value))}
                />
                <input
                    type="text"
                    className="block w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                    placeholder="Ajouter une description"
                    value={description}
                    onChange={(e) => dispatch(setDescription(e.target.value))}
                />
                <input
                    type="date"
                    className="block w-full mb-4 px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
                    value={dateFin}
                    onChange={(e) => dispatch(setDateFin(e.target.value))}
                />
                <button
                    onClick={() => dispatch(addTodo())}
                    className="w-full px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
                >
                    Ajouter
                </button>
            </div>
        </div>
    );
};

export default Input;
