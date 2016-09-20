// @flow
import type { Action } from './../actions/types'

type Exercise = { id: string, name: string, muscleIds: Array<string> }
type State = Array<Exercise>

export default function(state: State = [], action: Action): State {
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
