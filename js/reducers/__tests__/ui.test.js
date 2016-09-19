import ui from '../ui'
import {
  setMuscleModalVisibility,
  textInputExerciseName,
  selectMuscle,
  deselectMuscle
} from '../../actions/ui'

describe('ui reducer', () => {
  it('results in the default state with an undetected action', () => {
    const expected = {
      selectMuscleModalVisibility: false,
      textInputExerciseName: '',
      selectedMuscles: []
    }

    const result = ui(undefined, {})
    expect(result).toEqual(expected)
  })

  it('sets visibility with setMuscleModalVisibility action creator', () => {
    expect(
      ui(undefined, setMuscleModalVisibility(true))
    ).toEqual({
      selectMuscleModalVisibility: true,
      textInputExerciseName: '',
      selectedMuscles: []
    })

    expect(
      ui(undefined, setMuscleModalVisibility(false))
    ).toEqual({
      selectMuscleModalVisibility: false,
      textInputExerciseName: '',
      selectedMuscles: []
    })
  })

  it('sets exercise name with setMuscleModalVisibility action creator', () => {
    const result = ui({
      selectMuscleModalVisibility: true,
      textInputExerciseName: '',
      selectedMuscles: []
    }, textInputExerciseName('chest press'))

    expect(
      result
    ).toEqual({
      selectMuscleModalVisibility: true,
      textInputExerciseName: 'chest press',
      selectedMuscles: []
    })
  })

  it('adds to the array with selectedMuscles action creator', () => {
    const result = ui({
      selectMuscleModalVisibility: true,
      textInputExerciseName: 'chest press',
      selectedMuscles: []
    }, selectMuscle(2))

    expect(
      result
    ).toEqual({
      selectMuscleModalVisibility: true,
      textInputExerciseName: 'chest press',
      selectedMuscles: [2]
    })
  })

  it('does not add dups to selectedMuscles', () => {
    const result = ui({
      selectMuscleModalVisibility: true,
      textInputExerciseName: 'chest press',
      selectedMuscles: [2]
    }, selectMuscle(2))

    expect(
      result
    ).toEqual({
      selectMuscleModalVisibility: true,
      textInputExerciseName: 'chest press',
      selectedMuscles: [2]
    })
  })

  it('removes id from array with deselect action creator', () => {
    const result = ui({
      selectMuscleModalVisibility: true,
      textInputExerciseName: 'chest press',
      selectedMuscles: [1, 2]
    }, deselectMuscle(2))

    expect(
      result
    ).toEqual({
      selectMuscleModalVisibility: true,
      textInputExerciseName: 'chest press',
      selectedMuscles: [1]
    })
  })
})
