import React, { useState } from 'react'
import { useWorkouts } from '../context/WorkoutContext'
import styles from './WorkoutForm.module.css'

const WorkoutForm = () => {
  const { dispatch } = useWorkouts()
  const [formData, setFormData] = useState({
    exercise: '',
    sets: '',
    reps: '',
    weight: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const workout = {
      id: Date.now(),
      ...formData,
      date: new Date().toISOString(),
    }
    dispatch({ type: 'ADD_WORKOUT', payload: workout })
    setFormData({ exercise: '', sets: '', reps: '', weight: '' })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        name="exercise"
        placeholder="Exercise name"
        value={formData.exercise}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="sets"
        placeholder="Number of sets"
        value={formData.sets}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="reps"
        placeholder="Number of reps"
        value={formData.reps}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="weight"
        placeholder="Weight (kg)"
        value={formData.weight}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Workout</button>
    </form>
  )
}

export default WorkoutForm
