import React, { useEffect, useState } from 'react'

const Home = async () => {
    // const [tasks, setTasks] = useState([])


    // useEffect(() => {
    //     const fetchTasks = async () => {
    //         const userId = '66891d845c7733e7e40d58cb'
    //         const res = await fetch(`http://localhost:1010/api/tasks/${userId}`, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             mode: 'no-cors'
    //         })
    //         const data = await res.json()
    //         console.log(data.tasks)
    //         setTasks(data.tasks)

    //     }
    //     fetchTasks()
    // }, [])
    // const data = await res.json()
    // console.log(res.tasks)

    return (
        <div className='home-container'>
            Enter Task
            <input type="text"></input>
            <button>Submit</button>
        </div>
    )
}

export default Home