import { createSelector } from 'reselect'

export const getMuscles = (state) => state.muscles
const _getExercises = (state) => state.exercises

export const getExercises = createSelector(
  _getExercises,
  getMuscles,
  (exercises, muscles) =>
    exercises.map((exercise) =>
      Object.assign(
        {},
        {
          id: exercise.id,
          name: exercise.name,
          muscles: exercise
            .muscleIds
            .map((id) => muscles.find(m => m.id === id))
        }
      )
    )
)

export const getSelectMuscleModalVisibility =
  (state) => state.ui.selectMuscleModalVisibility
