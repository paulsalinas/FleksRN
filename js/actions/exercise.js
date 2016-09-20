// @flow
import type { Action } from './types'

export function addExercise(
  id: string,
  name: string,
  muscleIds: Array<string>
) : Action {
  return {
    type: 'ADD_EXERCISE',
    id,
    name,
    muscleIds
  }
}
