import { Add_Number_To100 } from './functions'

describe('test functions', () => {
  it('input has to be 104', () => {
    const results = Add_Number_To100(5)
    expect(results).toEqual(105)
  })
})
