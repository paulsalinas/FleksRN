import {
  getExercises,
  getMusclesWithSelected
} from '../selectors'

describe('selectors', () => {
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

  describe('getMusclesWithSelected', () => {
    it('selects proper state', () => {
      const state = {
        ui: {
          selectedMuscles: ['1', '2']
        },
        muscles: [
          {
            id: '1',
            name: 'chest'
          },
          {
            id: '2',
            name: 'back'
          },
          {
            id: '3',
            name: 'biceps'
          }
        ]
      }

      const expected = [
        {
          id: '1',
          name: 'chest',
          selected: true
        },
        {
          id: '2',
          name: 'back',
          selected: true
        },
        {
          id: '3',
          name: 'biceps',
          selected: false
        }
      ]

      const result = getMusclesWithSelected(state)
      expect(result).toEqual(expected)
    })
  })
})
