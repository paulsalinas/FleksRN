import ui from '../ui'
import {
  setMuscleModalVisibility,
  textInputExerciseName
} from '../../actions/ui'

test('undetected action results in the default state', () => {
  const expected = {
    selectMuscleModalVisibility: false,
    textInputExerciseName: ''
  }

  const result = ui(undefined, {})
  expect(result).toEqual(expected)
})

test('setMuscleModalVisibility sets visibility state', () => {
  expect(
    ui(undefined, setMuscleModalVisibility(true))
  ).toEqual({
    selectMuscleModalVisibility: true,
    textInputExerciseName: ''
  })

  expect(
    ui(undefined, setMuscleModalVisibility(false))
  ).toEqual({
    selectMuscleModalVisibility: false,
    textInputExerciseName: ''
  })
})

test('textInputExerciseName sets exercise name text', () => {
  const result = ui({
    selectMuscleModalVisibility: true,
    textInputExerciseName: ''
  }, textInputExerciseName('chest press'))

  expect(
    result
  ).toEqual({
    selectMuscleModalVisibility: true,
    textInputExerciseName: 'chest press'
  })
})
