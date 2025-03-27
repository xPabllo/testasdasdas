import React from 'react'
import { useWorkouts } from '../context/WorkoutContext'
import WorkoutCard from './WorkoutCard'
import styles from './WorkoutList.module.css'

const WorkoutList = () => {
  const { workouts } = useWorkouts()

  if (workouts.length === 0) {
    return <p className={styles.empty}>No workouts yet. Add one to get started!</p>
  }

  return (
    <div className={styles.list}>
      {workouts.map(workout => (
        <WorkoutCard key={workout.id} workout={workout} />
      ))}
    </div>
  )
}

export default WorkoutList
