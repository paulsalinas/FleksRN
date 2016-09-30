// @flow
import type { Action } from './../actions/types'
import type { Muscle } from './types'

// default muscles used when not using remote
const defaultMuscles: State = [
  {
    id : '1',
    name : 'biceps'
  },
  {
    id : '2',
    name : 'chest'
  },
  {
    id : '3',
    name : 'back'
  },
  {
    id : '4',
    name : 'shoulders'
  },
  {
    id : '5',
    name : 'hamstrings'
  }
]

type State = Array<Muscle>

export default function (state: State = defaultMuscles, action: Action) {
  switch(action) {
  default:
    return state
  }
}
