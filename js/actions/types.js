// @flow

export type Action =
  { type: 'MUSCLE_MODAL_VISIBILITY', visibility: boolean }
| { type: 'TEXT_INPUT_EXERCISE_NAME', name: string }
| { type: 'SELECT_MUSCLE', id: string }
| { type: 'DESELECT_MUSCLE', id: string }
| { type: 'ADD_EXERCISE', id: string, name: string, muscleIds: Array<string> }
| { type: 'CLEAR_EXERCISE_FORM' }
