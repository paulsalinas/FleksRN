// @flow
import type { Action } from './types'
import uuid from 'uuid'

export function addExercise(
  name: string,
  muscleIds: Array<string>
) : Action {
  return {
    type: 'ADD_EXERCISE',
    id: uuid.v4(),
    name,
    muscleIds
  }
}
