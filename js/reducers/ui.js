// @flow
import type { Action } from './../actions/types'

type State = {
  selectMuscleModalVisibility: boolean;
  textInputExerciseName: string,
  selectedMuscles: Array<number>
}

const initialState: State = {
  selectMuscleModalVisibility: false,
  textInputExerciseName: '',
  selectedMuscles: []
}

export default function ui (state: State = initialState, action: Action): State {
  switch (action.type) {
  case 'MUSCLE_MODAL_VISIBILITY':
    return Object.assign(
        {},
        state,
        { selectMuscleModalVisibility: action.visibility }
      )
  case 'TEXT_INPUT_EXERCISE_NAME':
    return Object.assign(
        {},
        state,
        { textInputExerciseName: action.name }
      )
  case 'SELECT_MUSCLE':
    return Object.assign(
      {},
      state,
      {
        selectedMuscles:
          state.selectedMuscles.includes(action.id) ?
            state.selectedMuscles
            :
            state.selectedMuscles.concat([action.id])
      }
    )
  case 'DESELECT_MUSCLE':
    var id = action.id
    return Object.assign(
      {},
      state,
      { selectedMuscles: state.selectedMuscles.filter((x) => x !== id) }
    )
  default:
    return state
  }
}
