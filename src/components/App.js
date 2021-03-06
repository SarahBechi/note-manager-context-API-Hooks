import React from 'react'
import './App.css'
import TaskList from './taskList'
import TaskListContextProvider from './context/taskListContext'
import TaskForm from './taskForm'
import Header from './header'
const App = () => {
    return (
        <TaskListContextProvider>
            <div className="container">
                <div className="app-wrapper">
                    <Header />
                    <div className="main">
                        <TaskForm />
                        <TaskList />

                    </div>
                </div>
            </div>
        </TaskListContextProvider>
    )
}

export default App
