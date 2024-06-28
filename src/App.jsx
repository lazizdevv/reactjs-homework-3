import React, { useState } from 'react';
import TaskForm from './components/form/form';
import TaskCard from './components/card/card';

function App() {
    const [tasks, setTasks] = useState([]);
    const [currentTask, setCurrentTask] = useState({});

    const addTask = (newTask) => {
        setTasks([
            ...tasks,
            {
                text: newTask,
                createdAt: new Date().toLocaleString(),
                edited: false,
            },
        ]);
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, taskIndex) => taskIndex !== index));
    };

    const startEditing = (index) => {
        setCurrentTask({ ...tasks[index], index, isEditing: true });
    };

    const updateTask = (updatedText) => {
        const updatedTasks = tasks.map((task, index) =>
            index === currentTask.index
                ? { ...task, text: updatedText, edited: true }
                : task
        );
        setTasks(updatedTasks);
        setCurrentTask({});
    };

    return (
        <div className="min-h-screen flex flex-col items-center  bg-gray-700">
            <div className="bg-gray-600 mt-5 p-8 rounded-lg shadow-md w-full max-w-xl ">
                <TaskForm addTask={addTask} />
                <ul className="list-none p-0 w-full max-w-xl">
                    {tasks.map((task, index) => (
                        <TaskCard
                            key={index}
                            task={task}
                            isEditing={currentTask.isEditing && currentTask.index === index}
                            startEditing={() => startEditing(index)}
                            deleteTask={() => deleteTask(index)}
                            updateTask={updateTask}
                            currentTask={currentTask}
                            setCurrentTask={setCurrentTask}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
