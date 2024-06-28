import React from 'react';

import DelIcon from '../../assets/delete-icon'
import EditIcon from '../../assets/edit-icon'
import SendIcon from '../../assets/send-icon'



function TaskCard({ task, isEditing, startEditing, deleteTask, updateTask, currentTask, setCurrentTask }) {
    const handleUpdate = () => {
        updateTask(currentTask.text);
        setCurrentTask({});
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleUpdate();
        }
    };

    return (

      <div className='bg-gray-500 rounded mb-2 p-2 w-full'>
        <li className="flex  justify-between items-center p-2  rounded ">
            {isEditing ? (
                <input
                    type="text"
                    value={currentTask.text}
                    onChange={(e) => setCurrentTask({ ...currentTask, text: e.target.value })}
                    className="flex-grow p-1 border border-gray-300 bg-transparent text-yellow-400 rounded-md focus:outline-none"
                    onKeyPress={handleKeyPress}
                />
            ) : (
                <h1 className="font-bold text-white  w-full max-w-xs break-words overflow-hidden">{task.text}</h1>
            )}
            <div className="my-2 flex justify-between items-center">
                {isEditing ? (
                    <button
                        onClick={handleUpdate}
                        className="bg-green-500 text-white ml-2 p-2 px-4 rounded-md hover:bg-green-600"
                    >
                        <SendIcon/>
                    </button>
                ) : (
                    <>
                        <button
                            onClick={startEditing}
                            className="bg-yellow-400 text-white p-2 px-4 rounded-md mr-2 hover:bg-yellow-500"
                        >
                            <EditIcon/>
                        </button>
                        <button
                            onClick={deleteTask}
                            className="bg-red-500 text-white p-2 px-4 rounded-md hover:bg-red-600"
                        >
                            <DelIcon/>
                        </button>
                    </>
                )}
            </div>
        </li>
            <div className="mt-2 flex justify-between w-full p-2">
                <span className="text-xs text-yellow-400 font-bold">
                    {task.edited ? 'Edited' : ''}
                </span>
                <span className="text-xs text-gray-100 font-bold">
                    Created: {task.createdAt}
                </span>
            </div>
      </div>
    );
}

export default TaskCard;
