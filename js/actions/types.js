// @flow

export type Action =
  { type: 'MUSCLE_MODAL_VISIBILITY', visibility: boolean }
| { type: 'TEXT_INPUT_EXERCISE_NAME', name: string }
| { type: 'SELECT_MUSCLE', id: number }
| { type: 'DESELECT_MUSCLE', id: number }
| { type: 'ADD_EXERCISE', id: string, name: string, muscleIds: Array<string> }
