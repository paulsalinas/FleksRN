import exercises from './../exercises'

describe('exercises', () => {
  it('adds an exercise on ADD_EXERCISE', () => {
    const action = {
      type: 'ADD_EXERCISE',
      id: '1',
      name: 'bicep curl',
      muscleIds: ['1', '2']
    }

    const expected = [
      {
        id: '1',
        name: 'bicep curl',
        muscleIds: ['1', '2']
      }
    ]

    const result = exercises(undefined, action)
    expect(result).toEqual(expected)
  })
})
