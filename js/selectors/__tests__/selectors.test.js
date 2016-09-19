import { getSelectMuscleModalVisibility } from '../selectors'

test('getSelectMuscleModalVisibility selects proper state', () => {
  const state = {
    ui: {
      selectMuscleModalVisibility: true
    }
  }

  const result = getSelectMuscleModalVisibility(state)
  expect(result).toEqual(true)
})
