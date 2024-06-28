import React, { useState } from 'react';

function TaskForm({ addTask }) {
    const [taskText, setTaskText] = useState('');

    const handleAddTask = (e) => {
        e.preventDefault();
        if (taskText.trim() !== '') {
            addTask(taskText);
            setTaskText('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddTask(e);
        }
    };

    return (
        <form onSubmit={handleAddTask}>
            <div className="flex mb-5 gap-2">
                <input
                    type="text"
                    value={taskText}
                    onChange={(e) => setTaskText(e.target.value)}
                    placeholder="Enter New Task"
                    className="flex-grow p-2 text-center border border-gray-300 bg-transparent text-white rounded focus:outline-none"
                    onKeyPress={handleKeyPress}
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Add Task
                </button>
            </div>
        </form>
    );
}

export default TaskForm;