import { createSelector } from 'reselect'

const _getExercises = (state) => state.exercises

export const getSelectedMuscles = (state) => state.ui.selectedMuscles

export const getMuscles = (state) => state.muscles

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

export const getExerciseNameInputText =
  (state) => state.ui.textInputExerciseName

export const getMusclesWithSelected = createSelector(
  getMuscles,
  getSelectedMuscles,
  (muscles, selectedMuscles) =>
    muscles.map((muscle) => ({
      ...muscle,
      selected: selectedMuscles.includes(muscle.id)
    })
  )
)
