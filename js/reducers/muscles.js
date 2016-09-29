// @flow
import type { Action } from './../actions/types'

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

export type Muscle = {
  id: string,
  name: string
}

type State = Array<Muscle>

export default function (state: State = defaultMuscles, action: Action) {
  switch(action) {
  default:
    return state
  }
}
