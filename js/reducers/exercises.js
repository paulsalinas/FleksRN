// @flow
import type { Action } from './../actions/types'
import type { Exercise } from './types'

const defaultExercises: State = [
  {
    id: '1',
    name: 'chest press',
    muscleIds: ['1']
  },
  {
    id: '2',
    name: 'barbell row',
    muscleIds: ['2']
  }
]

type State = Array<Exercise>

export default function(
  state: State = defaultExercises,
  action: Action
): State {
  switch(action.type) {
  case 'ADD_EXERCISE':
    return state.concat([{
      id: action.id,
      name: action.name,
      muscleIds: action.muscleIds
    }])
  default:
    return state
  }
}
