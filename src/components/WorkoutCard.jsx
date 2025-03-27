import React from 'react'
import { format } from 'date-fns'
import { useWorkouts } from '../context/WorkoutContext'
import styles from './WorkoutCard.module.css'

const WorkoutCard = ({ workout }) => {
  const { dispatch } = useWorkouts()

  const handleDelete = () => {
    dispatch({ type: 'DELETE_WORKOUT', payload: workout.id })
  }

  return (
    <div className={styles.card}>
      <h3 className={styles.exercise}>{workout.exercise}</h3>
      <div className={styles.details}>
        <p>Sets: {workout.sets}</p>
        <p>Reps: {workout.reps}</p>
        <p>Weight: {workout.weight}kg</p>
      </div>
      <p className={styles.date}>
        {format(new Date(workout.date), 'MMM d, yyyy')}
      </p>
      <button onClick={handleDelete} className={styles.deleteBtn}>
        Delete
      </button>
    </div>
  )
}

export default WorkoutCard
