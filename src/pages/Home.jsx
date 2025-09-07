import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <h2>Welcome to the Task Manager App v1</h2>
            <Link to ="/tasks">View Tasks</Link>
        </div>
    );
}
export default Home