// @flow
import type { Action } from './../actions/types'

type State = {
  selectMuscleModalVisibility: boolean;
  textInputExerciseName: string
}

const initialState: State = {
  selectMuscleModalVisibility: false,
  textInputExerciseName: ''
}

export default function ui (state: State = initialState, action: Action): State {
  switch (action.type) {
  case ('MUSCLE_MODAL_VISIBILITY'):
    return Object.assign(
        {},
        state,
        { selectMuscleModalVisibility: action.visibility }
      )
  case ('TEXT_INPUT_EXERCISE_NAME'):
    return Object.assign(
        {},
        state,
        { textInputExerciseName: action.name }
      )
  default:
    return state
  }
}
