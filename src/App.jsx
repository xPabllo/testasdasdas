import React from 'react'
import WorkoutList from './components/WorkoutList'
import WorkoutForm from './components/WorkoutForm'
import { WorkoutProvider } from './context/WorkoutContext'
import styles from './App.module.css'

function App() {
  return (
    <WorkoutProvider>
      <div className={styles.container}>
        <h1 className={styles.title}>Workout Tracker</h1>
        <WorkoutForm />
        <WorkoutList />
      </div>
    </WorkoutProvider>
  )
}

export default App
