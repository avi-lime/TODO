import React, { useEffect, useState } from 'react'

const Home = () => {

    const [tasks, setTasks] = useState([])


    const fetchTasks = async () => {
        const userId = '66891d845c7733e7e40d58cb'
        const res = await fetch(`http://localhost:1010/api/tasks/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const data = await res.json()
        console.log(data)
        setTasks(data)
    }
    useEffect(() => {
        fetchTasks()
    }, [])

    const toggleTask = async (taskId, completed) => {
        const res = await fetch(`http://localhost:1010/api/tasks/${taskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ completed })
        })
        setTasks(tasks.map(task => task._id === taskId ? { ...task, completed } : task))

        const data = await res.json()
        console.log(data);
    }

    return (
        <>
            <h1>Tasks</h1>
            <ul>
                {tasks.map(task => (
                    <li key={task._id}>
                        <input
                            type='checkbox'
                            checked={task.completed}
                            onChange={(e) => {
                                toggleTask(task._id, !task.completed);
                            }}
                        />{task.title}
                    </li>
                ))}
            </ul>
        </>
    )
}
export default Home