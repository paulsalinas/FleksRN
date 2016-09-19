import { getSelectMuscleModalVisibility, getExercises } from '../selectors'

describe('selectors', () => {
  describe('getSelectMuscleModalVisibility', () => {
    it('selects proper state', () => {
      const state = {
        ui: {
          selectMuscleModalVisibility: true
        }
      }

      const result = getSelectMuscleModalVisibility(state)
      expect(result).toEqual(true)
    })
  })

  describe('getExercises', () => {
    it('selects proper state', () => {
      const state = {
        exercises: [
          {
            id: '1',
            name: 'chest press',
            muscleIds: ['1', '2']
          },
          {
            id: '2',
            name: 'barbell row',
            muscleIds: ['2']
          }
        ],
        muscles: [
          {
            id: '1',
            name: 'chest'
          },
          {
            id: '2',
            name: 'back'
          }
        ]
      }

      const expected = [
        {
          id: '1',
          name: 'chest press',
          muscles: [
            {
              id: '1',
              name: 'chest'
            },
            {
              id: '2',
              name: 'back'
            }
          ]
        },
        {
          id: '2',
          name: 'barbell row',
          muscles: [
            {
              id: '2',
              name: 'back'
            }
          ]
        }
      ]

      const result = getExercises(state)
      expect(result).toEqual(expected)
    })

  })

})
