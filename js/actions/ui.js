// @flow
import type { Action } from './types'

export function setMuscleModalVisibility(visibility: boolean): Action {
  return {
    type: 'MUSCLE_MODAL_VISIBILITY',
    visibility
  }
}

export function textInputExerciseName(name: string): Action {
  return {
    type: 'TEXT_INPUT_EXERCISE_NAME',
    name
  }
}

export function selectMuscle(id: number): Action {
  return {
    type: 'SELECT_MUSCLE',
    id
  }
}

export function deselectMuscle(id: number): Action {
  return {
    type: 'DESELECT_MUSCLE',
    id
  }
}
