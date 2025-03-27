import React, { createContext, useContext, useReducer, useEffect } from 'react'

const WorkoutContext = createContext()

const workoutReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_WORKOUT':
      return [...state, action.payload]
    case 'DELETE_WORKOUT':
      return state.filter(workout => workout.id !== action.payload)
    default:
      return state
  }
}

export const WorkoutProvider = ({ children }) => {
  const [workouts, dispatch] = useReducer(workoutReducer, [], () => {
    const localData = localStorage.getItem('workouts')
    return localData ? JSON.parse(localData) : []
  })

  useEffect(() => {
    localStorage.setItem('workouts', JSON.stringify(workouts))
  }, [workouts])

  return (
    <WorkoutContext.Provider value={{ workouts, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  )
}

export const useWorkouts = () => {
  const context = useContext(WorkoutContext)
  if (!context) {
    throw new Error('useWorkouts must be used within a WorkoutProvider')
  }
  return context
}
